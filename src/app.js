import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ManifoldModule from 'manifold-3d';
import { toManifold, toScad } from './csg.js';
import { MODES, SCREWS, defaultDesign, newBoard, build, layout, footprint, holeToPlate, plateToHole } from './model.js';
import { PRESETS } from './presets.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const r2 = v => Math.round(v * 100) / 100;
const STORE = 'pcb-plate-designer-v1';

// ---------------- state, undo ----------------
let D = load() || defaultDesign();
let sel = 0, selHole = -1, last = null;
const undo = [], redo = [];
function load() { try { const s = localStorage.getItem(STORE); return s ? normalise(JSON.parse(s)) : null; } catch (e) { return null; } }
function normalise(d) {
  const base = defaultDesign();
  const out = { ...base, ...d, plate: { ...base.plate, ...d.plate }, hr: { ...base.hr, ...d.hr }, din: { ...base.din, ...d.din }, r10: { ...base.r10, ...d.r10 }, sk: { ...base.sk, ...d.sk } };
  out.boards = (d.boards || []).map(b => newBoard({ ...b, holes: (b.holes || []).map(h => ({ ...h })) }));
  if (!MODES[out.mode]) out.mode = 'homeracker';
  return out;
}
const snap = () => JSON.stringify(D);
function commit() {
  const s = snap();
  if (s === last) return;
  if (last) { undo.push(last); if (undo.length > 150) undo.shift(); redo.length = 0; }
  last = s;
  try { localStorage.setItem(STORE, s); } catch (e) { /* storage unavailable */ }
}
function restore(s) { D = normalise(JSON.parse(s)); last = s; sel = Math.min(sel, D.boards.length - 1); selHole = -1; renderAll(); try { localStorage.setItem(STORE, s); } catch (e) { } }
const board = () => D.boards[sel];

// ---------------- field helpers ----------------
function field(spec, obj, onSet) {
  const wrap = document.createElement('label');
  if (spec.span) wrap.style.gridColumn = `span ${spec.span}`;
  let inp;
  if (spec.type === 'chk') {
    wrap.className = 'chk';
    inp = document.createElement('input'); inp.type = 'checkbox'; inp.checked = !!obj[spec.k];
    wrap.append(inp, document.createTextNode(spec.label));
  } else {
    wrap.append(document.createTextNode(spec.label));
    if (spec.type === 'sel') {
      inp = document.createElement('select');
      inp.innerHTML = spec.opts.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('');
      inp.value = String(obj[spec.k]);
    } else {
      inp = document.createElement('input');
      inp.type = spec.type === 'text' ? 'text' : 'number';
      if (spec.type !== 'text') { inp.step = spec.step || 0.1; inp.inputMode = 'decimal'; if (spec.min != null) inp.min = spec.min; }
      inp.value = obj[spec.k];
    }
    wrap.append(inp);
  }
  if (spec.dis) inp.disabled = true;
  inp.id = 'f-' + spec.id;
  const get = () => spec.type === 'chk' ? inp.checked : spec.type === 'text' ? inp.value
    : spec.type === 'sel' ? (spec.num ? +inp.value : inp.value) : (inp.value === '' ? null : +inp.value);
  inp.addEventListener('input', () => { const v = get(); if (v === null || Number.isNaN(v)) return; obj[spec.k] = v; onSet && onSet(spec.k); update(); });
  inp.addEventListener('change', () => { commit(); if (spec.rerender) renderSide(); });
  return wrap;
}
function fill(el, specs, obj, onSet) { el.replaceChildren(...specs.map(s => field(s, obj, onSet))); }

// ---------------- side panel ----------------
function renderModes() {
  $('modes').innerHTML = Object.entries(MODES).map(([k, m]) => `<button data-mode="${k}" aria-pressed="${D.mode === k}">${esc(m.label)}</button>`).join('');
}
function renderSide() {
  renderModes();
  const m = MODES[D.mode];
  $('modeTitle').textContent = m.label; $('modeSub').textContent = m.sub;
  const modeSpecs = {
    homeracker: [[{ k: 'span', label: 'Bar spacing (mm, c-c)', step: 15, id: 'span' }, D.hr], [{ k: 'capLen', label: 'Cap width (mm)', step: 1, id: 'cap' }, D.hr], [{ k: 'clamp', label: 'Fix to the bar with', type: 'sel', opts: [['ziptie', 'Zip ties (channels through the caps)'], ['setscrew', 'M3 set screw + nut'], ['pin', 'HomeRacker lock pin only']], id: 'clamp', span: 2, rerender: true }, D.hr],
      ...(D.hr.clamp === 'ziptie' ? [[{ k: 'zipW', label: 'Zip tie width (mm)', step: 0.5, id: 'zw' }, D.hr]] : [])],
    din: [[{ k: 'clipW', label: 'Clip width (mm)', step: 1, id: 'cw' }, D.din], [{ k: 'railX', label: 'Rail position x (0 = centre)', step: 1, id: 'rx' }, D.din], [{ k: 'clear', label: 'Clip clearance (mm)', step: 0.05, id: 'dc' }, D.din], [{ k: 'latch', label: 'Latch thickness (mm)', step: 0.1, id: 'lt' }, D.din]],
    rack10: [[{ k: 'units', label: 'Height (U)', type: 'sel', num: true, opts: [[1, '1U'], [2, '2U'], [3, '3U']], id: 'u' }, D.r10], [{ k: 'depth', label: 'Depth (mm, 0 = auto)', step: 5, id: 'dp' }, D.r10],
      [{ k: 'panelW', label: 'Ear width', type: 'sel', num: true, opts: [[250, '250 mm (fits 250 bed)'], [254, '254 mm (full 10")']], id: 'pw' }, D.r10], [{ k: 'floor', label: 'Floor (mm)', step: 0.5, id: 'fl' }, D.r10]],
    skadis: [[{ k: 'style', label: 'Mounting', type: 'sel', opts: [['flat', 'Flat on the board'], ['blade', 'Blade sticking out']], id: 'sks', span: 2, rerender: true }, D.sk],
      [{ k: 'fit', label: 'Hook play in slot (mm)', step: 0.1, id: 'skf' }, D.sk], [{ k: 'boardT', label: 'Board thickness (mm)', step: 0.5, id: 'skt' }, D.sk],
      ...(D.sk.style === 'flat' ? [[{ k: 'rows', label: 'Hooks', type: 'sel', opts: [['top', 'Top row only'], ['all', 'Every row (every 40 mm)']], id: 'skr', span: 2 }, D.sk]] : [])],
  }[D.mode];
  $('modeFields').replaceChildren(...modeSpecs.map(([s, o]) => field(s, o)));
  const p = D.plate, auto = p.autoSize;
  const ps = [];
  if (D.mode !== 'rack10') ps.push({ k: 't', label: 'Thickness (mm)', step: 0.5, id: 't' });
  ps.push({ k: 'holeKind', label: 'Screw holes', type: 'sel', opts: [['pilot', 'Pilot (self-tapping)'], ['clear', 'Clearance (screw + nut)']], id: 'hk' });
  ps.push({ k: 'margin', label: 'Margin around boards', step: 1, id: 'mg' });
  ps.push({ k: 'lattice', label: 'Open lattice (15 mm grid, zip-tie friendly)', type: 'chk', id: 'lat', span: 2, rerender: true });
  if (p.lattice) ps.push({ k: 'pitch', label: 'Grid pitch', step: 1, id: 'pi' }, { k: 'bar', label: 'Bar width', step: 0.5, id: 'ba' });
  if (D.mode !== 'rack10') {
    ps.push({ k: 'autoSize', label: 'Size the plate to the boards', type: 'chk', id: 'as', span: 2, rerender: true });
    if (!auto) { if (D.mode === 'din' || D.mode === 'skadis') ps.push({ k: 'L', label: 'Length (mm)', step: 1, id: 'L' }); ps.push({ k: 'H', label: 'Height (mm)', step: 1, id: 'H' }); }
  }
  fill($('plateFields'), ps, p);
  renderBoards();
}
function renderBoards() {
  $('boardList').innerHTML = D.boards.map((b, i) => `<button data-b="${i}" aria-pressed="${i === sel}"><span>${esc(b.name || 'board ' + (i + 1))}</span><small>${r2(b.w)} × ${r2(b.h)} · ${b.holes.length} holes</small></button>`).join('')
    || '<p class="sub">No boards yet. Add one below.</p>';
  const b = board();
  $('boardBox').style.display = b ? '' : 'none';
  if (!b) { $('holeRows').innerHTML = ''; return; }
  fill($('boardFields'), [
    { k: 'name', label: 'Name', type: 'text', span: 3, id: 'bn' },
    { k: 'w', label: 'Width', step: 0.5, id: 'bw' }, { k: 'h', label: 'Height', step: 0.5, id: 'bh' },
    { k: 'screw', label: 'Screw', type: 'sel', opts: Object.keys(SCREWS).map(s => [s, s]), id: 'bs' },
    { k: 'x', label: 'Position x', step: 0.5, id: 'bx' }, { k: 'y', label: 'Position y', step: 0.5, id: 'by' },
    { k: 'sh', label: 'Standoff (mm)', step: 0.5, id: 'bsh' },
    { k: 't', label: 'PCB thickness', step: 0.1, id: 'bt' }, { k: 'comp', label: 'Tallest part', step: 1, id: 'bc' },
  ], b, k => { if (k === 'name' || k === 'w' || k === 'h') renderBoardList(); });
  renderHoles();
}
function renderBoardList() {
  [...$('boardList').children].forEach((el, i) => {
    const b = D.boards[i]; if (!b || !el.dataset) return;
    el.innerHTML = `<span>${esc(b.name || 'board ' + (i + 1))}</span><small>${r2(b.w)} × ${r2(b.h)} · ${b.holes.length} holes</small>`;
  });
}
function renderHoles() {
  const b = board(); if (!b) return;
  const opts = sc => `<option value="">(${esc(b.screw)})</option>` + Object.keys(SCREWS).map(s => `<option ${sc === s ? 'selected' : ''}>${s}</option>`).join('');
  $('holeRows').innerHTML = b.holes.map((h, i) => `<tr data-h="${i}" class="${i === selHole ? 'sel' : ''}"><td class="n">${i + 1}</td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="x" value="${r2(h.x)}" aria-label="hole ${i + 1} x"></td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="y" value="${r2(h.y)}" aria-label="hole ${i + 1} y"></td>
    <td><select data-k="screw" aria-label="hole ${i + 1} screw">${opts(h.screw)}</select></td>
    <td><input type="checkbox" data-k="on" ${h.off ? '' : 'checked'} aria-label="use hole ${i + 1}"></td>
    <td><button class="x" data-del="${i}" aria-label="remove hole ${i + 1}">×</button></td></tr>`).join('');
}

// ---------------- checks / info ----------------
function renderChecks(res) {
  $('msgs').innerHTML = res.warn.length ? res.warn.map(w => `<li class="w">${esc(w)}</li>`).join('') : '<li>No problems found.</li>';
  $('info').innerHTML = res.info.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
}

// ---------------- 2D sheet ----------------
const NS = 'http://www.w3.org/2000/svg';
let svg, view = null;
function renderSheet(res) {
  const lay = res.lay, { L, H } = lay;
  let x0 = 0, x1 = L, y0 = 0;
  for (const dr of res.draw) { if (dr.k === 'slot') continue; x0 = Math.min(x0, dr.r[0]); x1 = Math.max(x1, dr.r[0] + dr.r[2]); y0 = Math.min(y0, dr.r[1]); }
  for (const b of D.boards) { const f = footprint(b); x0 = Math.min(x0, f.x0); x1 = Math.max(x1, f.x1); y0 = Math.min(y0, f.y0); }
  let y1 = Math.max(H, ...D.boards.map(b => footprint(b).y1));
  const pad = 16;
  view = [x0 - pad, -(y1 + pad + 4), x1 - x0 + 2 * pad, y1 - y0 + 2 * pad + 12];
  const cs = getComputedStyle(document.documentElement);
  const fs = Math.max(view[2], view[3]) / 70;
  const o = [];
  o.push(`<rect x="0" y="${-H}" width="${L}" height="${H}" fill="var(--plate)" stroke="var(--cobalt-ink)" stroke-width="0.4"/>`);
  for (const c of res.cells) o.push(`<rect x="${c[0][0]}" y="${-c[2][1]}" width="${c[1][0] - c[0][0]}" height="${c[2][1] - c[0][1]}" fill="var(--bg)" opacity="0.85"/>`);
  for (const dr of res.draw) if (dr.k === 'slot') o.push(`<rect x="${dr.r[0]}" y="${-(dr.r[1] + dr.r[3])}" width="${dr.r[2]}" height="${dr.r[3]}" rx="2.5" fill="none" stroke="var(--mute)" stroke-width="0.3" opacity="0.6"/>`);
  for (const dr of res.draw) {
    if (dr.k === 'slot') continue;
    const [x, y, w, h] = dr.r;
    o.push(`<rect x="${x}" y="${-(y + h)}" width="${w}" height="${h}" fill="${dr.k === 'rail' ? 'none' : 'var(--cobalt)'}" fill-opacity="${dr.k === 'wall' ? 0.45 : 0.3}" stroke="var(--cobalt-ink)" stroke-width="0.3" ${dr.k === 'rail' ? 'stroke-dasharray="2 1.5"' : ''}/>`);
  }
  if (res.guides) for (const tie of res.guides.ties) if (tie.first)
    o.push(`<rect x="${tie.x0}" y="${-tie.y1}" width="${tie.x1 - tie.x0}" height="${tie.y1 - tie.y0}" fill="none" stroke="#ff7a1a" stroke-width="0.8"/>`,
      `<text x="${(tie.x0 + tie.x1) / 2}" y="${-tie.y0 + fs * 1.3}" font-size="${fs * 0.8}" fill="#ff7a1a" text-anchor="middle">zip tie</text>`);
  // usable area
  const [ax0, ay0, ax1, ay1] = lay.area;
  o.push(`<rect x="${ax0}" y="${-ay1}" width="${ax1 - ax0}" height="${ay1 - ay0}" fill="none" stroke="var(--mute)" stroke-width="0.25" stroke-dasharray="1.5 1.5"/>`);
  // boards
  D.boards.forEach((b, i) => {
    const f = footprint(b), s = i === sel;
    o.push(`<g data-b="${i}" class="brd" style="cursor:move"><rect x="${f.x0}" y="${-f.y1}" width="${f.fw}" height="${f.fh}" rx="1" fill="var(--pcb)" fill-opacity="${s ? 0.32 : 0.18}" stroke="var(--pcb)" stroke-width="${s ? 0.8 : 0.4}"/>`);
    // corner marker shows the board's own origin (lower left before rotation)
    const [ox, oy] = holeToPlate(b, 0, 0);
    o.push(`<circle cx="${ox}" cy="${-oy}" r="${fs * 0.35}" fill="var(--pcb)"/>`);
    o.push(`<text x="${(f.x0 + f.x1) / 2}" y="${-(f.y0 + f.y1) / 2}" font-size="${fs}" text-anchor="middle" dominant-baseline="middle" fill="var(--ink)" style="pointer-events:none">${esc(b.name || 'board ' + (i + 1))}</text></g>`);
    b.holes.forEach((h, k) => {
      const [x, y] = holeToPlate(b, h.x, h.y), sc = SCREWS[h.screw || b.screw] || SCREWS.M3;
      const hs = s && k === selHole;
      const hd = D.plate.holeKind === 'clear' ? sc.clear : sc.pilot;
      o.push(`<g data-b="${i}" data-h="${k}" style="cursor:grab"><circle cx="${x}" cy="${-y}" r="${Math.max(sc.sd / 2 + 1.5, fs * 0.9)}" fill="transparent"/>
        <circle cx="${x}" cy="${-y}" r="${sc.sd / 2}" fill="${h.off ? 'none' : 'var(--bg)'}" stroke="${hs ? 'var(--cobalt-ink)' : 'var(--ink)'}" stroke-width="${hs ? 0.8 : 0.35}" ${h.off ? 'stroke-dasharray="1 1"' : ''}/>
        <circle cx="${x}" cy="${-y}" r="${hd / 2}" fill="${hs ? 'var(--cobalt-ink)' : 'var(--ink)'}" opacity="${h.off ? 0.3 : 1}"/></g>`);
      if (hs) o.push(`<text x="${x + sc.sd / 2 + 1.5}" y="${-y - sc.sd / 2 - 1}" font-size="${fs}" fill="var(--cobalt-ink)" style="pointer-events:none">${r2(h.x)}, ${r2(h.y)}</text>`);
    });
  });
  // side labels + dimensions
  const [lf, rt, bt, tp] = lay.sides;
  const lab = (x, y, t, a = 'middle', r = 0) => t ? `<text x="${x}" y="${y}" font-size="${fs}" fill="var(--mute)" text-anchor="${a}" ${r ? `transform="rotate(${r} ${x} ${y})"` : ''}>${esc(t)}</text>` : '';
  o.push(lab(L / 2, -y0 + fs * 1.6, bt), lab(L / 2, -H - fs * 0.6, `${tp ? tp + ' · ' : ''}${r2(L)} × ${r2(H)} mm`));
  o.push(lab(x0 - fs * 0.6, -H / 2, lf, 'middle', -90), lab(x1 + fs * 1.2, -H / 2, rt, 'middle', 90));
  svg.setAttribute('viewBox', view.join(' '));
  svg.innerHTML = o.join('');
  $('sheetDims').textContent = `${r2(L)} × ${r2(H)} mm`;
  void cs;
}
function toMM(ev) {
  const pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
  const p = pt.matrixTransform(svg.getScreenCTM().inverse());
  return [p.x, -p.y];
}
const snapV = v => { const s = +$('snap').value; return Math.round(v / s) * s; };
let drag = null, lastDown = null;
function initSheet() {
  svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-label', 'Top view of the plate; drag boards and holes');
  $('sheet').append(svg);
  svg.addEventListener('pointerdown', ev => {
    const g = ev.target.closest('[data-b]');
    if (!g) { selHole = -1; refresh(); return; }
    const bi = +g.dataset.b, hk = g.dataset.h != null ? +g.dataset.h : -1;
    const [qx, qy] = toMM(ev), now = performance.now();
    if (hk < 0 && lastDown && lastDown.bi === bi && now - lastDown.t < 450 && Math.hypot(qx - lastDown.x, qy - lastDown.y) < 3) {
      // double click on a board: add a hole there
      lastDown = null;
      const b = D.boards[bi], [lx, ly] = plateToHole(b, qx, qy);
      if (bi !== sel) { sel = bi; renderSide(); }
      b.holes.push({ x: r2(snapV(lx)), y: r2(snapV(ly)) }); selHole = b.holes.length - 1;
      commit(); renderHoles(); renderBoardList(); update(); return;
    }
    lastDown = { bi, t: now, x: qx, y: qy };
    const structural = bi !== sel;
    sel = bi; selHole = hk;
    const [mx, my] = toMM(ev), b = board();
    drag = { hk, mx, my, bx: b.x, by: b.y, moved: false };
    svg.setPointerCapture(ev.pointerId);
    if (structural) renderSide(); else renderHoles();
    refresh();
  });
  svg.addEventListener('pointermove', ev => {
    if (!drag) return;
    const [mx, my] = toMM(ev), b = board();
    if (Math.hypot(mx - drag.mx, my - drag.my) < 0.3 && !drag.moved) return;
    drag.moved = true;
    if (drag.hk >= 0) {
      const [lx, ly] = plateToHole(b, mx, my);
      b.holes[drag.hk].x = r2(snapV(lx)); b.holes[drag.hk].y = r2(snapV(ly));
      renderHoles();
    } else {
      b.x = r2(snapV(drag.bx + mx - drag.mx)); b.y = r2(snapV(drag.by + my - drag.my));
      for (const id of ['bx', 'by']) { const el = $('f-' + id); if (el) el.value = id === 'bx' ? b.x : b.y; }
    }
    update();
  });
  const end = () => { if (drag) { drag = null; commit(); } };
  svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);
}

// ---------------- 3D ----------------
let W = null, renderer, scene, camera, controls, partMesh, ghosts, guides, lastMesh = null, needFit = true;
function init3D() {
  const host = $('view');
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
  catch (e) { $('status').textContent = '3D preview needs WebGL, which this browser does not offer. The drawing and the SCAD export still work.'; return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  host.prepend(renderer.domElement);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, 1, 1, 5000);
  camera.up.set(0, 0, 1);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8090b0, 1.6));
  const dl = new THREE.DirectionalLight(0xffffff, 1.6); dl.position.set(-150, -250, 400); scene.add(dl);
  const d2 = new THREE.DirectionalLight(0xffffff, 0.5); d2.position.set(200, 200, 100); scene.add(d2);
  partMesh = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshStandardMaterial({ color: 0x3a64ec, roughness: 0.55, metalness: 0.05, flatShading: true }));
  scene.add(partMesh);
  ghosts = new THREE.Group(); scene.add(ghosts); guides = new THREE.Group(); scene.add(guides);
  const grid = new THREE.GridHelper(260, 26, 0x8899cc, 0xc8d0e8); grid.rotation.x = Math.PI / 2; grid.position.z = -0.05; grid.material.opacity = 0.35; grid.material.transparent = true;
  scene.add(grid);
  const ro = new ResizeObserver(() => { const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / Math.max(h, 1); camera.updateProjectionMatrix(); });
  ro.observe(host);
  (function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();
}
function fit(bb) {
  const c = new THREE.Vector3(...bb.min).add(new THREE.Vector3(...bb.max)).multiplyScalar(0.5);
  const size = Math.max(...bb.max.map((v, i) => v - bb.min[i]));
  controls.target.copy(c);
  camera.position.set(c.x - size * 0.7, c.y - size * 1.5, c.z + size * 1.3);
  camera.near = size / 100; camera.far = size * 20; camera.updateProjectionMatrix();
}
function setMesh(m, res) {
  if (!renderer) return;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(m.pos, 3));
  g.setIndex(new THREE.BufferAttribute(m.idx, 1));
  const ng = g.toNonIndexed(); ng.computeVertexNormals(); g.dispose();
  partMesh.geometry.dispose(); partMesh.geometry = ng;
  ghosts.clear(); guides.clear();
  if (res && res.flip) { ghosts.rotation.set(Math.PI, 0, 0); ghosts.position.set(0, res.flip.H, res.flip.t); }
  else { ghosts.rotation.set(0, 0, 0); ghosts.position.set(0, 0, 0); }
  if ($('ghost').checked) {
    const base = D.mode === 'rack10' ? D.r10.floor : D.plate.t;
    for (const b of D.boards) {
      const f = footprint(b);
      const pcb = new THREE.Mesh(new THREE.BoxGeometry(f.fw, f.fh, b.t), new THREE.MeshStandardMaterial({ color: 0x1f8a4c, transparent: true, opacity: 0.55 }));
      pcb.position.set((f.x0 + f.x1) / 2, (f.y0 + f.y1) / 2, base + b.sh + b.t / 2); ghosts.add(pcb);
      const env = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(f.fw, f.fh, b.comp)), new THREE.LineBasicMaterial({ color: 0x1f8a4c, transparent: true, opacity: 0.5 }));
      env.position.set(pcb.position.x, pcb.position.y, base + b.sh + b.t + b.comp / 2); ghosts.add(env);
    }
  }
  if ($('ghost').checked && res && res.guides) {
    // bars (grey) and the zip tie path (orange) so it is clear how the blade is fixed
    const barMat = new THREE.MeshStandardMaterial({ color: 0x8a8f99, transparent: true, opacity: 0.45 });
    const tieMat = new THREE.MeshStandardMaterial({ color: 0xff7a1a });
    for (const b of res.guides.bars) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(15, 15, b.len), barMat);
      bar.position.set(b.cx, -7.5, b.z); guides.add(bar);
    }
    for (const tie of res.guides.ties) {
      const { x0, x1, y0, y1, z, w } = tie, th = 1.2;
      for (const [cx, cy, sx, sy] of [[(x0 + x1) / 2, y1, x1 - x0, th], [(x0 + x1) / 2, y0, x1 - x0, th], [x0, (y0 + y1) / 2, th, y1 - y0], [x1, (y0 + y1) / 2, th, y1 - y0]]) {
        const seg = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, w), tieMat);
        seg.position.set(cx, cy, z); guides.add(seg);
      }
    }
  }
  if (needFit) { fit(m.bbox); needFit = false; }
  const grams = m.volume / 1000 * 1.27;
  $('meta').textContent = `${r2(m.bbox.max[0] - m.bbox.min[0])} × ${r2(m.bbox.max[1] - m.bbox.min[1])} × ${r2(m.bbox.max[2] - m.bbox.min[2])} mm · about ${Math.round(grams)} g PETG`;
}

// ---------------- update loop ----------------
let res = null, pending = 0;
function update() {
  res = build(D);
  renderSheet(res); renderChecks(res);
  clearTimeout(pending);
  pending = setTimeout(compute, drag ? 90 : 30);
}
function compute() {
  if (!W) return;
  try {
    lastMesh = toManifold(res.node, W);
    $('status').textContent = '';
    setMesh(lastMesh, res);
  } catch (e) { $('status').textContent = 'Could not build the part: ' + e.message; }
}
function refresh() { if (res) renderSheet(res); }
function renderAll() { renderSide(); update(); }

// ---------------- events ----------------
$('modes').addEventListener('click', ev => {
  const b = ev.target.closest('[data-mode]'); if (!b) return;
  D.mode = b.dataset.mode; needFit = true;
  const lay = layout(D), [ax0, ay0, ax1, ay1] = lay.area;
  if (D.boards.some(bd => { const f = footprint(bd); return f.x0 < ax0 || f.y0 < ay0 || f.x1 > ax1 || (D.mode !== 'homeracker' && D.mode !== 'din' && f.y1 > ay1); })) arrange();
  commit(); renderAll();
});
$('boardList').addEventListener('click', ev => { const b = ev.target.closest('[data-b]'); if (!b) return; sel = +b.dataset.b; selHole = -1; renderBoards(); refresh(); });
$('addBoard').addEventListener('click', () => {
  D.boards.push(newBoard({ name: 'board ' + (D.boards.length + 1), holes: [] })); sel = D.boards.length - 1; selHole = -1;
  placeNew(board()); commit(); renderAll();
});
$('preset').innerHTML = '<option value="">Add from devices.json…</option><optgroup label="Boards with mounting holes">' +
  PRESETS.filter(p => !p.box).map(p => `<option value="${esc(p.key)}">${esc(p.name)}</option>`).join('') + '</optgroup><optgroup label="Outline only (add holes yourself)">' +
  PRESETS.filter(p => p.box).map(p => `<option value="${esc(p.key)}">${esc(p.name)}</option>`).join('') + '</optgroup>';
$('preset').addEventListener('change', ev => {
  const p = PRESETS.find(q => q.key === ev.target.value); ev.target.value = ''; if (!p) return;
  D.boards.push(newBoard({ name: p.name, w: p.w, h: p.h, sh: p.sh, screw: p.screw, comp: Math.round(p.comp), holes: p.holes.map(h => ({ ...h })) }));
  sel = D.boards.length - 1; selHole = -1; placeNew(board()); commit(); renderAll();
});
$('dupBoard').addEventListener('click', () => { const b = board(); if (!b) return; const c = JSON.parse(JSON.stringify(b)); c.name += ' copy'; D.boards.push(c); sel = D.boards.length - 1; placeNew(c); commit(); renderAll(); });
$('delBoard').addEventListener('click', () => { if (!board()) return; D.boards.splice(sel, 1); sel = Math.max(0, sel - 1); selHole = -1; commit(); renderAll(); });
$('arrange').addEventListener('click', () => { arrange(); commit(); renderAll(); });
document.querySelector('#boardBox').addEventListener('click', ev => {
  const r = ev.target.closest('[data-rot]'); if (!r || !board()) return;
  const b = board(), f = footprint(b), cx = (f.x0 + f.x1) / 2, cy = (f.y0 + f.y1) / 2;
  b.rot = ((b.rot + +r.dataset.rot) % 360 + 360) % 360;
  const g = footprint(b); b.x = r2(snapV(cx - g.fw / 2)); b.y = r2(snapV(cy - g.fh / 2));
  commit(); renderBoards(); update();
});
$('holeRows').addEventListener('input', ev => {
  const tr = ev.target.closest('[data-h]'); if (!tr) return;
  const h = board().holes[+tr.dataset.h], k = ev.target.dataset.k;
  if (k === 'on') h.off = !ev.target.checked;
  else if (k === 'screw') { if (ev.target.value) h.screw = ev.target.value; else delete h.screw; }
  else { const v = +ev.target.value; if (ev.target.value === '' || Number.isNaN(v)) return; h[k] = v; }
  selHole = +tr.dataset.h; update();
});
$('holeRows').addEventListener('change', () => commit());
$('holeRows').addEventListener('focusin', ev => { const tr = ev.target.closest('[data-h]'); if (tr && selHole !== +tr.dataset.h) { selHole = +tr.dataset.h; [...$('holeRows').rows].forEach((r, i) => r.classList.toggle('sel', i === selHole)); refresh(); } });
$('holeRows').addEventListener('click', ev => {
  const d = ev.target.closest('[data-del]'); if (!d) return;
  board().holes.splice(+d.dataset.del, 1); selHole = -1; commit(); renderHoles(); renderBoardList(); update();
});
$('addHole').addEventListener('click', () => {
  const b = board(); if (!b) return;
  b.holes.push({ x: r2(b.w / 2), y: r2(b.h / 2) }); selHole = b.holes.length - 1; commit(); renderHoles(); renderBoardList(); update();
});
$('ghost').addEventListener('change', () => lastMesh && setMesh(lastMesh, res));
$('resetView').addEventListener('click', () => lastMesh && fit(lastMesh.bbox));
document.addEventListener('keydown', ev => {
  const inField = /INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName || '');
  if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'z' && !inField) {
    ev.preventDefault();
    if (ev.shiftKey) { if (redo.length) { undo.push(last); restore(redo.pop()); } }
    else if (undo.length) { redo.push(last); restore(undo.pop()); }
    return;
  }
  if (inField || !board()) return;
  if ((ev.key === 'Delete' || ev.key === 'Backspace') && selHole >= 0) {
    board().holes.splice(selHole, 1); selHole = -1; commit(); renderHoles(); renderBoardList(); update(); ev.preventDefault(); return;
  }
  const dir = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[ev.key];
  if (dir && selHole >= 0) {
    const st = ev.shiftKey ? 0.1 : 0.5, b = board(), h = b.holes[selHole];
    const [px, py] = holeToPlate(b, h.x, h.y), [lx, ly] = plateToHole(b, px + dir[0] * st, py + dir[1] * st);
    h.x = r2(lx); h.y = r2(ly); commit(); renderHoles(); update(); ev.preventDefault();
  }
});

// ---------------- layout helpers ----------------
function placeNew(b) {
  // first free spot: right of or above an existing board, inside the usable area
  const lay = layout({ ...D, plate: { ...D.plate, autoSize: true } }), [ax0, ay0, ax1] = lay.area, gap = 6;
  const others = D.boards.filter(o => o !== b).map(footprint), f = footprint(b);
  const x0 = ax0 + (D.mode === 'rack10' ? 4 : 3), y0 = ay0 + (D.mode === 'rack10' ? 2 : 1);
  const maxX = D.mode === 'din' ? 236 : ax1;
  const cands = [[x0, y0], ...others.map(o => [o.x1 + gap, o.y0]), ...others.map(o => [o.x0, o.y1 + gap]), ...others.map(o => [x0, o.y1 + gap])];
  cands.sort((a, c) => a[1] - c[1] || a[0] - c[0]);
  const free = ([x, y]) => x + f.fw <= maxX && !others.some(o => x < o.x1 + gap - 0.01 && x + f.fw > o.x0 - gap + 0.01 && y < o.y1 + gap - 0.01 && y + f.fh > o.y0 - gap + 0.01);
  const [x, y] = cands.find(free) || [x0, Math.max(y0, ...others.map(o => o.y1 + gap))];
  b.x = r2(x); b.y = r2(y);
}
function arrange() {
  const lay = layout({ ...D, plate: { ...D.plate, autoSize: true } }), [ax0, ay0] = lay.area;
  const maxX = D.mode === 'homeracker' || D.mode === 'rack10' ? lay.area[2] : 236;
  let x = ax0 + (D.mode === 'rack10' ? 4 : 3), y = ay0 + (D.mode === 'rack10' ? 2 : 1), rowH = 0;
  for (const b of D.boards) {
    const f = footprint(b);
    if (x + f.fw > maxX && x > ax0 + 4) { x = ax0 + 3; y += rowH + 6; rowH = 0; }
    b.x = r2(x); b.y = r2(y); x += f.fw + 6; rowH = Math.max(rowH, f.fh);
  }
}

// ---------------- dialogs: pattern + paste ----------------
function dialog(html, onOk) {
  const dlg = $('dlg'), form = $('dlgForm');
  form.innerHTML = html + '<div class="row" style="justify-content:flex-end;margin-top:14px"><button class="b" value="cancel">Cancel</button><button class="b pri" value="ok">Apply</button></div>';
  dlg.onclose = () => { if (dlg.returnValue === 'ok') onOk(form); };
  dlg.returnValue = ''; dlg.showModal();
}
$('patBtn').addEventListener('click', () => {
  const b = board(); if (!b) return;
  dialog(`<h2 style="font-size:18px;margin-bottom:6px">Rectangle hole pattern</h2><p class="sub">Four holes, centre to centre spacing. Leave the offset empty to centre the pattern on the board. This replaces the board's holes; drag single holes afterwards if the pattern is not a perfect rectangle.</p>
    <div class="grid"><label>Spacing along width<input name="a" type="number" step="0.1" value="${r2(b.w - 7)}"></label><label>Spacing along height<input name="b" type="number" step="0.1" value="${r2(b.h - 7)}"></label>
    <label>Offset x (first hole)<input name="ox" type="number" step="0.1" placeholder="centred"></label><label>Offset y (first hole)<input name="oy" type="number" step="0.1" placeholder="centred"></label></div>`, f => {
    const a = +f.a.value, bb = +f.b.value;
    const ox = f.ox.value === '' ? (b.w - a) / 2 : +f.ox.value, oy = f.oy.value === '' ? (b.h - bb) / 2 : +f.oy.value;
    b.holes = [[0, 0], [a, 0], [a, bb], [0, bb]].map(([x, y]) => ({ x: r2(ox + x), y: r2(oy + y) }));
    selHole = -1; commit(); renderBoards(); update();
  });
});
$('pasteBtn').addEventListener('click', () => {
  const b = board(); if (!b) return;
  dialog(`<h2 style="font-size:18px;margin-bottom:6px">Paste hole coordinates</h2><p class="sub">One hole per line: x y, optionally a screw size (M2, M2.5, M3, M4). Commas, semicolons, tabs or spaces all work, so a column copied from a spreadsheet or KiCad's drill report fits.</p>
    <textarea name="t" rows="8">${b.holes.map(h => `${r2(h.x)}, ${r2(h.y)}${h.screw ? ', ' + h.screw : ''}`).join('\n')}</textarea>
    <label class="chk" style="margin-top:8px"><input type="checkbox" name="add"> add to the existing holes</label>`, f => {
    const holes = [];
    for (const line of f.t.value.split(/\n/)) {
      const parts = line.trim().split(/[\s,;]+/).filter(Boolean);
      if (parts.length < 2 || Number.isNaN(+parts[0]) || Number.isNaN(+parts[1])) continue;
      const h = { x: +parts[0], y: +parts[1] }; const sc = parts.find(p => SCREWS[p.toUpperCase()]);
      if (sc) h.screw = sc.toUpperCase(); holes.push(h);
    }
    b.holes = f.add.checked ? b.holes.concat(holes) : holes; selHole = -1; commit(); renderBoards(); update();
  });
});

// ---------------- export ----------------
const fname = () => (D.name || 'plate').replace(/[^\w.-]+/g, '_') + '_' + D.mode + (D.boards.length ? '_' + D.boards.map(b => b.name).join('+').replace(/[^\w.-]+/g, '-').slice(0, 60) : '');
function scadText() {
  const r = build(D);
  const json = JSON.stringify(D).replace(/\*\//g, '* /');
  return `// ${MODES[D.mode].label} plate, generated by the PCB plate designer\n// ${r.info.map(([k, v]) => k + ': ' + v).join('\n// ')}\n` +
    (r.warn.length ? `// WARNINGS:\n// ${r.warn.join('\n// ')}\n` : '') +
    `// Prints flat as modelled, no supports.\n\n${toScad(r.node)}\n\n/* design (open it in the plate designer):\n${json}\n*/\n`;
}
function stlBytes() {
  const m = lastMesh || (W && toManifold(build(D).node, W));
  if (!m) throw new Error('the 3D engine is not loaded');
  const n = m.idx.length / 3, buf = new ArrayBuffer(84 + n * 50), dv = new DataView(buf);
  const head = 'PCB plate designer ' + D.mode; for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i));
  dv.setUint32(80, n, true);
  let o = 84; const P = m.pos;
  for (let t = 0; t < n; t++) {
    const a = m.idx[3 * t] * 3, b = m.idx[3 * t + 1] * 3, c = m.idx[3 * t + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1;
    for (const v of [nx / l, ny / l, nz / l]) { dv.setFloat32(o, v, true); o += 4; }
    for (const i of [a, b, c]) for (let k = 0; k < 3; k++) { dv.setFloat32(o, P[i + k], true); o += 4; }
    o += 2;
  }
  return new Uint8Array(buf);
}
const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = u => { let c = 0xffffffff; for (let i = 0; i < u.length; i++) c = CRC[(c ^ u[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
function zip(files) {
  const enc = new TextEncoder(), parts = [], central = []; let off = 0;
  for (const [name, data] of files) {
    const nb = enc.encode(name), d = typeof data === 'string' ? enc.encode(data) : data, crc = crc32(d);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint32(14, crc, true); lh.setUint32(18, d.length, true); lh.setUint32(22, d.length, true); lh.setUint16(26, nb.length, true);
    parts.push(new Uint8Array(lh.buffer), nb, d);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint32(16, crc, true); ch.setUint32(20, d.length, true); ch.setUint32(24, d.length, true); ch.setUint16(28, nb.length, true); ch.setUint32(42, off, true);
    central.push(new Uint8Array(ch.buffer), nb);
    off += 30 + nb.length + d.length;
  }
  const cs = central.reduce((s, p) => s + p.length, 0), end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true); end.setUint32(12, cs, true); end.setUint32(16, off, true);
  return new Blob([...parts, ...central, new Uint8Array(end.buffer)]);
}
let dl = null;
async function save(name, data, mime) {
  if (dl) {
    try { await dl.save({ filename: name, data: data instanceof Blob ? data : new Blob([data], { type: mime }) }); }
    catch (e) { if (e && e.code !== 'declined') toast('Could not save: ' + (e.message || e.code)); }
    return;
  }
  const a = document.createElement('a'), url = URL.createObjectURL(data instanceof Blob ? data : new Blob([data], { type: mime }));
  a.href = url; a.download = name; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 5000);
}
function toast(t) { $('status').textContent = t; setTimeout(() => { if ($('status').textContent === t) $('status').textContent = ''; }, 4000); }
$('bStl').addEventListener('click', () => { try { save(fname() + '.stl', stlBytes(), 'model/stl'); } catch (e) { toast('STL export failed: ' + e.message); } });
$('bScad').addEventListener('click', () => save(fname() + '.scad', scadText(), 'text/plain'));
$('bJson').addEventListener('click', () => save(fname() + '.json', JSON.stringify(D, null, 1), 'application/json'));
$('bZip').addEventListener('click', () => {
  const files = [[fname() + '.scad', scadText()], [fname() + '.json', JSON.stringify(D, null, 1)]];
  try { files.unshift([fname() + '.stl', stlBytes()]); } catch (e) { toast('3D engine not loaded, the zip has SCAD and design only'); }
  save(fname() + '.zip', zip(files), 'application/zip');
});
$('bCopy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(scadText()); toast('SCAD copied to the clipboard'); } catch (e) { toast('The clipboard is not available here'); }
});
$('bLoad').addEventListener('click', () => $('fileIn').click());
$('fileIn').addEventListener('change', async ev => {
  const f = ev.target.files[0]; ev.target.value = ''; if (!f) return;
  try {
    let txt = await f.text();
    const m = txt.match(/\/\* design[^\n]*\n([\s\S]*?)\n\*\//); if (m) txt = m[1];
    D = normalise(JSON.parse(txt)); sel = 0; selHole = -1; needFit = true; commit(); renderAll();
  } catch (e) { toast('That file is not a plate design: ' + e.message); }
});

// ---------------- start ----------------
initSheet();
init3D();
commit();
renderAll();
$('status').textContent = 'Loading the 3D engine…';
ManifoldModule({ locateFile: () => new URL('manifold.wasm', document.baseURI).href }).then(w => {
  w.setup(); W = w; $('status').textContent = ''; compute();
}).catch(e => { $('status').textContent = '3D engine could not load (' + e.message + '). The drawing and SCAD export still work.'; });
if (window.claude && typeof window.claude.use === 'function') {
  window.claude.use('downloads').then(x => {
    dl = x;
    if (dl) { // STL and SCAD are not allowed as single downloads here: they come in the zip
      $('bStl').hidden = true; $('bScad').hidden = true;
    }
  }).catch(() => { });
}
