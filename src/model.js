// Plate geometry for the three mounting modes. Everything is built in print
// orientation: the plate lies on the bed (z = 0), x/y are the editor's 2D
// coordinates (mm), boards sit on standoffs that point up (+z).
// Dimensions follow rack-mount/dut_blade.scad and flat_tray_10in.scad.
import { cube, cyl, ext, tr, rot, uni, dif, rect, hull2, teardrop } from './csg.js';

export const U = 44.45;
export const SCREWS = {
  'M2':   { pilot: 1.6, clear: 2.4, sd: 5.5 },
  'M2.5': { pilot: 2.2, clear: 2.9, sd: 6.5 },
  'M3':   { pilot: 2.6, clear: 3.4, sd: 7.0 },
  'M4':   { pilot: 3.4, clear: 4.5, sd: 9.0 },
};
// HomeRacker core constants (same as dut_blade.scad)
const HR_UNIT = 15, HR_WALL = 2, HR_TOL = 0.2, HR_PIN = 4;
const HR_CAP = HR_UNIT + 2 * HR_WALL + HR_TOL;   // 19.2
const SS_BOSS = 6, SS_D = 3.3, SS_NUT_AF = 5.8, SS_NUT_T = 2.8;
// 10" rack (same as flat_tray_10in.scad)
const R10 = { opening: 222.25, pitch: 236.525, hole_d: 6.4, panel_t: 5, side_t: 4, lip: 3, rear_h: 14, gusset: 40, band: 12 };
R10.tray_w = R10.opening - 1.25;   // 221
// half 19" (EIA-310: 450 mm opening, holes 465.1 mm apart, panel 482.6 mm): tray from the rail to the
// rack centre with 0.625 mm play each side, ear and holes on the rail side only
const R19H = { tray_w: 450 / 2 - 1.25, ear: 482.6 / 2 - 225 + 0.625, hole: 465.1 / 2 - 225 + 0.625 };
const DIN_FOOT_H = 8;
// label field on the front: 14 mm leaves room for 12 mm label tape
const LBL = { h: 14, t: 2, w: 40 };

export const MODES = {
  homeracker: { label: 'Rackerspace', sub: 'Blade on two 15 mm bars (HomeRacker caps, 180 mm apart)' },
  rack10: { label: '10" rack', sub: 'Flat tray with rack ears, ports to the open front', tray: true },
  rack19h: { label: '½ 19" rack', sub: 'Half-width tray for a 19" rack, ear on the left or right rail, ports to the open front', tray: true },
  din: { label: 'Hutschiene', sub: 'Blade that clips onto a 35 mm DIN rail (TS35)' },
  skadis: { label: 'SKÅDIS', sub: 'IKEA pegboard (5 × 15 mm slots, 40 mm apart, rows staggered by 20 mm): flat on the board, or a blade that sticks out' },
};
// IKEA SKÅDIS: 5 mm board, 5 x 15 mm slots, 40 mm apart in a row, rows 20 mm apart and offset by 20 mm
const SK = { pitch: 40, row: 20, slotW: 5, slotH: 15, stemH: 6, leg: 7.5, legT: 3 };

export function newBoard(over = {}) {
  return {
    name: 'board', w: 85, h: 56, x: 10, y: 10, rot: 0, t: 1.6, sh: 6, comp: 20, screw: 'M2.5',
    holes: [{ x: 3.5, y: 3.5 }, { x: 61.5, y: 3.5 }, { x: 3.5, y: 52.5 }, { x: 61.5, y: 52.5 }],
    ...over,
  };
}

export function defaultDesign() {
  return {
    version: 1, name: 'plate', mode: 'homeracker',
    plate: { t: 3, lattice: true, pitch: 15, bar: 3, holeKind: 'pilot', label: true, autoSize: true, L: 200, H: 100, margin: 5 },
    hr: { span: 180, capLen: 30, clamp: 'ziptie', zipW: 5, label: 'left' },
    din: { clipW: 20, clear: 0.3, latch: 1.8, railX: 0 },
    r10: { units: 1, depth: 0, panelW: 250, floor: 2.5, label: 'left', side: 'left' },   // also used by rack19h
    sk: { style: 'flat', fit: 0.6, boardT: 5, rows: 'top', label: 'bottom' },
    boards: [newBoard({ name: 'Raspberry Pi 4', x: 20, y: 12 })],
  };
}

// ---------- board helpers ----------
export function footprint(b) {
  const r = ((b.rot % 360) + 360) % 360;
  const fw = r % 180 ? b.h : b.w, fh = r % 180 ? b.w : b.h;
  return { x0: b.x, y0: b.y, x1: b.x + fw, y1: b.y + fh, fw, fh };
}
export function holeToPlate(b, hx, hy) {
  const r = ((b.rot % 360) + 360) % 360;
  const [lx, ly] = r === 90 ? [b.h - hy, hx] : r === 180 ? [b.w - hx, b.h - hy] : r === 270 ? [hy, b.w - hx] : [hx, hy];
  return [b.x + lx, b.y + ly];
}
export function plateToHole(b, px, py) {
  const r = ((b.rot % 360) + 360) % 360, lx = px - b.x, ly = py - b.y;
  return r === 90 ? [ly, b.h - lx] : r === 180 ? [b.w - lx, b.h - ly] : r === 270 ? [b.w - ly, lx] : [lx, ly];
}
function boardsExtent(d) {
  let x1 = 0, y1 = 0;
  for (const b of d.boards) { const f = footprint(b); x1 = Math.max(x1, f.x1); y1 = Math.max(y1, f.y1); }
  return { x1, y1 };
}

// ---------- layout: plate size, usable area, labels ----------
export function layout(d) {
  const p = d.plate, e = boardsExtent(d), m = p.margin;
  if (d.mode === 'homeracker') {
    const L = d.hr.span + HR_CAP;
    const H = p.autoSize ? Math.max(Math.ceil(e.y1 + m), 40) : p.H;
    return { L, H, area: [5, 9, L - 5, H - 3], bot: 9, sides: ['front', 'rear', 'bars (bottom)', 'top'] };
  }
  if (d.mode === 'din') {
    const L = p.autoSize ? Math.max(Math.ceil(e.x1 + m), 62) : p.L;
    const H = p.autoSize ? Math.max(Math.ceil(e.y1 + m), 30) : p.H;
    return { L, H, area: [m, DIN_FOOT_H + 6, L - m, H - 3], bot: DIN_FOOT_H + 6, sides: ['', '', 'DIN rail (bottom)', 'top'] };
  }
  if (d.mode === 'skadis') {
    const blade = d.sk.style === 'blade';
    const L = p.autoSize ? Math.max(Math.ceil(e.x1 + m), blade ? 40 : 30) : p.L;
    // flat: the top 26 mm carry the hook slots, boards go below them
    // flat: the label strip goes above the hooks (top) or below the boards (bottom)
    const lb = !blade && p.label, top = lb && d.sk.label === 'top' ? LBL.h : 0, bot = lb && !top ? LBL.h : 0;
    const H = p.autoSize ? Math.max(Math.ceil(e.y1 + (blade ? m : 28 + top)), blade ? 30 : 45 + top + bot) : p.H;
    return blade ? { L, H, area: [10, 4, L - 3, H - 3], bot: 5, sides: ['SKÅDIS board (wall)', 'away from the wall', 'bottom', 'top'] }
      : { L, H, area: [3, 3 + bot, L - 3, H - 26 - top], bot: 5, top, sides: ['', '', 'bottom (front view)', 'top (hooks)'] };
  }
  const L = d.mode === 'rack19h' ? R19H.tray_w : R10.tray_w;
  const H = d.r10.depth > 0 ? d.r10.depth : Math.max(Math.ceil(e.y1 + m), 60);
  return { L, H, area: [R10.side_t, 2, L - R10.side_t, H], bot: 0, sides: ['left wall', 'right wall', 'FRONT (ears, open)', 'rear'] };
}

// ---------- lattice ----------
function axCells(lo, hi, pitch, bar) {
  const o = pitch - bar, L = hi - lo;
  const n = L < o ? 0 : Math.floor((L - o) / pitch) + 1;
  const used = n > 0 ? n * pitch - bar : 0;
  return { start: lo + (L - used) / 2, n };
}
function latticeHoles(x0, y0, x1, y1, pitch, bar, rects, circles) {
  const o = pitch - bar, cx = axCells(x0, x1, pitch, bar), cy = axCells(y0, y1, pitch, bar), out = [];
  for (let i = 0; i < cx.n; i++) for (let j = 0; j < cy.n; j++) {
    const a = cx.start + i * pitch, b = cy.start + j * pitch;
    if (rects.some(r => a < r[2] && a + o > r[0] && b < r[3] && b + o > r[1])) continue;
    if (circles.some(([px, py, r]) => {
      const qx = Math.max(a, Math.min(px, a + o)), qy = Math.max(b, Math.min(py, b + o));
      return (qx - px) ** 2 + (qy - py) ** 2 < r * r;
    })) continue;
    out.push(rect(a, b, o, o));
  }
  return out;
}

// profile drawn in (y, z), extruded along +x from x0
const yz = (pts, x0, len) => tr([x0, 0, 0], rot([90, 0, 90], ext([pts], len)));

// ---------- standoffs ----------
function standoffs(d, base) {
  const add = [], sub = [], circles = [];
  for (const b of d.boards) for (const h of b.holes) {
    if (h.off) continue;
    const s = SCREWS[h.screw || b.screw] || SCREWS.M3;
    const [x, y] = holeToPlate(b, h.x, h.y);
    const top = base + b.sh, hd = d.plate.holeKind === 'clear' ? s.clear : s.pilot;
    add.push(tr([x, y, 0], cyl(top, s.sd / 2, s.sd / 2, 40)));
    if (b.sh > 2) add.push(tr([x, y, base], cyl(1.5, s.sd / 2 + 1.5, s.sd / 2, 40)));
    sub.push(tr([x, y, -1], cyl(top + 2, hd / 2, hd / 2, 24)));
    circles.push([x, y, s.sd / 2 + 3]);
  }
  return { add, sub, circles };
}

// ---------- checks shared by all modes ----------
function checks(d, lay, warn) {
  const [ax0, ay0, ax1, ay1] = lay.area;
  d.boards.forEach((b, i) => {
    const f = footprint(b), n = b.name || `board ${i + 1}`;
    if (f.x0 < ax0 - 0.01 || f.y0 < ay0 - 0.01 || f.x1 > ax1 + 0.01 || f.y1 > ay1 + 0.01)
      warn.push(`${n} reaches outside the usable area (x ${ax0}..${ax1}, y ${ay0}..${ay1.toFixed(1)}).`);
    b.holes.forEach((h, k) => {
      if (h.x < 0 || h.y < 0 || h.x > b.w || h.y > b.h) warn.push(`${n}: hole ${k + 1} lies outside the board.`);
    });
    if (!b.holes.some(h => !h.off)) warn.push(`${n} has no mounting holes, so nothing holds it.`);
    d.boards.forEach((c, j) => {
      if (j <= i) return;
      const g = footprint(c);
      if (f.x0 < g.x1 && f.x1 > g.x0 && f.y0 < g.y1 && f.y1 > g.y0) warn.push(`${n} overlaps ${c.name || 'board ' + (j + 1)}.`);
    });
  });
}

// ---------- the three modes ----------
export function build(d) {
  const lay = layout(d), { L, H } = lay, p = d.plate, lb = p.label, warn = [], info = [], draw = [];
  let cells = [], guides = null;
  checks(d, lay, warn);
  let node;

  if (d.mode === 'homeracker') {
    const t = p.t, cl = d.hr.capLen, so = standoffs(d, t);
    const clamp = d.hr.clamp || (d.hr.setscrew === false ? 'pin' : 'setscrew');
    const ss = clamp === 'setscrew', zt = clamp === 'ziptie';
    const bridge = zt ? 6 : 3;
    // zip tie channels: run across the cap just above the bar, so a tie goes through the
    // channel, down both cap walls and under the bar. 2.5 mm tall: a short bridge in the print.
    const zw = d.hr.zipW || 5, nz = zt ? (cl >= 2 * zw + 12 ? 2 : 1) : 0;
    const zz = nz === 2 ? [cl / 4 - zw / 2 + 1, 3 * cl / 4 - zw / 2 - 1] : nz === 1 ? [cl / 2 - zw / 2] : [];
    const caps = [], cuts = [];
    for (const [cx, s] of [[HR_CAP / 2, -1], [L - HR_CAP / 2, 1]]) {
      caps.push(cube([HR_CAP, bridge, cl], [cx - HR_CAP / 2, 0, 0]));
      caps.push(cube([HR_WALL, HR_UNIT + 0.01, cl], [cx - HR_CAP / 2, -HR_UNIT, 0]));
      caps.push(cube([HR_WALL, HR_UNIT + 0.01, cl], [cx + HR_CAP / 2 - HR_WALL, -HR_UNIT, 0]));
      const pinLen = HR_CAP + (ss ? 2 * SS_BOSS : 0) + 2;
      cuts.push(cube([pinLen, HR_PIN, HR_PIN], [cx - pinLen / 2, -HR_UNIT / 2 - HR_PIN / 2, cl / 2 - HR_PIN / 2]));
      for (const z of zz) cuts.push(cube([HR_CAP + 2, 2.5, zw], [cx - HR_CAP / 2 - 1, 1.5, Math.max(z, t + 0.5)]));
      if (ss) {
        const wx = cx + s * HR_CAP / 2, ssz = cl - 7;
        caps.push(cube([SS_BOSS, HR_UNIT, cl], [s > 0 ? wx : wx - SS_BOSS, -HR_UNIT, 0]));
        cuts.push(cube([SS_NUT_T, SS_NUT_AF, cl], [wx + s * SS_BOSS / 2 - SS_NUT_T / 2, -HR_UNIT / 2 - SS_NUT_AF / 2, ssz - SS_NUT_AF / Math.sqrt(3) - 0.2]));
        const x0 = s > 0 ? wx - HR_WALL - 1 : wx - SS_BOSS - 1, len = SS_BOSS + HR_WALL + 2;
        cuts.push(tr([x0, -HR_UNIT / 2, ssz], rot([0, 90, 0], ext([teardrop(SS_D, -1, 0)], len))));
      }
    }
    // 45 degree gussets at the blade ends tie the 3 mm plate to the 30 mm caps
    const gus = [[t, bridge], [cl, bridge], [t, bridge + cl - t]].map(([z, y]) => [y, z]);
    caps.push(yz(gus, 0, 4), yz(gus, L - 4, 4));
    if (lb) {   // label wall on the left or right end, whichever faces out of the rack
      const right = d.hr.label === 'right', lx = right ? L - LBL.t : 0;
      caps.push(cube([LBL.t, H - bridge, LBL.h], [lx, bridge, 0]));
      draw.push({ r: [lx, bridge, LBL.t, H - bridge], k: 'wall' });
      info.push(['Label', `${LBL.h} mm wide strip on the ${right ? 'right' : 'left'} end`]);
    }
    const blockers = [[0, 0, 5, bridge + cl], [L - 5, 0, L, bridge + cl]];
    cells = p.lattice ? latticeHoles(5, lay.bot, L - 5, H - 5, p.pitch, p.bar, blockers, so.circles) : [];
    for (const cx of [HR_CAP / 2, L - HR_CAP / 2]) draw.push({ r: [cx - HR_CAP / 2 - (ss && cx < L / 2 ? SS_BOSS : 0), -HR_UNIT, HR_CAP + (ss ? SS_BOSS : 0), HR_UNIT + bridge], k: 'cap' });
    node = dif(uni(ext([rect(0, 0, L, H), ...cells], t), caps, so.add), cuts, so.sub);
    guides = { bars: [], ties: [] };
    for (const cx of [HR_CAP / 2, L - HR_CAP / 2]) {
      guides.bars.push({ cx, z: cl / 2, len: cl + 30 });
      zz.forEach((z, i) => guides.ties.push({ x0: cx - HR_CAP / 2 - 0.8, x1: cx + HR_CAP / 2 + 0.8, y0: -HR_UNIT - 0.8, y1: 2.75, z: Math.max(z, t + 0.5) + zw / 2, w: zw - 0.4, first: i === 0 }));
    }
    const total = H + 18;
    info.push(['Blade', `${f1(L)} × ${f1(H)} mm`]);
    info.push(['Height in rack', `${f1(total)} mm incl. bar and bracket → ${Math.ceil(total / U - 1e-6)}U`]);
    info.push(['Bars', `${d.hr.span} mm apart centre to centre`]);
    const thick = Math.max(...d.boards.map(b => t + b.sh + b.t + b.comp), lb ? LBL.h : t);
    info.push(['Blade spacing', `≥ ${Math.ceil(thick / HR_UNIT) * HR_UNIT} mm (${f1(thick)} mm deep, rounded to 15 mm)`]);
    info.push(['Hardware', ss ? '2 × M3 nut + 2 × M3x10 set screw' : zt ? `${2 * nz} zip ties up to ${zw} mm wide (the HomeRacker pin hole stays)` : '2 HomeRacker lock pins']);
    if (zt) info.push(['Zip ties', `thread each tie through a channel just above the bar (${nz} per cap), down both cap walls, under the bar, and pull tight`]);
    if (H > 240) warn.push('Blade is taller than 240 mm, which will not fit a 250 mm bed.');
  }

  else if (d.mode === 'din') {
    const t = p.t, c = d.din.clear, lt = d.din.latch, cw = Math.max(d.din.clipW, t), fh = DIN_FOOT_H;
    const rc = d.din.railX > 0 ? d.din.railX : L / 2;
    const f0 = Math.max(rc - 17.5 - 8, 0), f1 = Math.min(rc + 17.5 + c + lt + 6, L);
    if (rc - 17.5 - c - 2.4 < 0 || rc + 17.5 + c + lt > L) warn.push('The DIN clip does not fit on the blade; move the rail or make the blade longer.');
    const so = standoffs(d, t);
    // gussets, kept below the lowest board that sits over them
    let gmax = cw - t;
    for (const b of d.boards) {
      const f = footprint(b);
      if (f.x0 < f1 + 1 && f.x1 > f0 - 1) gmax = Math.min(gmax, f.y0 - fh - 1);
    }
    const parts = [cube([f1 - f0, fh, cw], [f0, 0, 0])];
    if (gmax > 1) {
      const g = gmax, full = g >= cw - t;
      const pr = full ? [[fh, t], [fh, cw], [fh + cw - t, t]] : [[fh, t], [fh, cw], [fh + g, cw - g], [fh + g, t]];
      parts.push(yz(pr, f0, 4), yz(pr, f1 - 4, 4));
    }
    const zt = -(1 + c);
    const clip2d = [
      rect(rc - 17.5 - c - 2.4, zt - 1.8, 2.4 + c + 2.2, 1.8),
      rect(rc - 17.5 - c - 2.4, zt - 1.8, 2.4, 1.8 + 1 + c + 0.01),
      rect(rc + 17.5 + c, zt - 1.8, lt, 1.8 + 1 + c + fh - 2),
      hull2([...rect(rc + 17.5 + c - 2.2, zt - 0.8, 2.2, 0.8), ...rect(rc + 17.5 + c, zt - 1.8, 0.01, 1.8)]),
    ];
    for (const r of clip2d) parts.push(ext([r], cw));
    if (lb) {   // label wall on the front (top) edge
      parts.push(cube([L, LBL.t, LBL.h], [0, H - LBL.t, 0]));
      draw.push({ r: [0, H - LBL.t, L, LBL.t], k: 'wall' });
      info.push(['Label', `${LBL.h} mm wide strip on the front edge`]);
    }
    const big = cw + 10;
    const cuts = [
      cube([1.0, fh - 2 + 1, big], [rc + 17.5 + c - 1.0, -1, -1]),
      cube([L + 2, fh - 2 + 1, big], [rc + 17.5 + c + lt, -1, -1]),
    ];
    const blockers = [[f0 - 1, 0, f1 + 1, fh + Math.max(gmax, 0) + 2]];
    cells = p.lattice ? latticeHoles(5, lay.bot, L - 5, H - 5, p.pitch, p.bar, blockers, so.circles) : [];
    draw.push({ r: [f0, 0, f1 - f0, fh], k: 'cap' }, { r: [rc - 17.5, -7.5, 35, 7.5], k: 'rail' });
    node = dif(uni(ext([rect(0, 0, L, H), ...cells], t), parts, so.add), cuts, so.sub);
    info.push(['Blade', `${f1n(L)} × ${f1n(H)} mm, clip ${f1n(cw)} mm wide`]);
    info.push(['Rail', `TS35 centred at x = ${f1n(rc)} mm`]);
    const thick = Math.max(...d.boards.map(b => t + b.sh + b.t + b.comp), cw);
    info.push(['Blade spacing on the rail', `≥ ${f1n(thick)} mm`]);
    info.push(['Tuning', `din_clear ${c} (looser: higher), latch ${lt} mm (softer: thinner)`]);
    if (L > 240 || H > 240) warn.push('Blade is larger than 240 mm, which will not fit a 250 mm bed.');
  }

  else if (d.mode === 'skadis') {
    const t = p.t, sw = SK.slotW - d.sk.fit, dep = d.sk.boardT + 0.4, blade = d.sk.style === 'blade';
    const hooks = [];
    if (blade) {
      // hooks on the rear edge, one per slot of a single column (slots every 40 mm)
      const so = standoffs(d, t), parts = [cube([6, H, sw], [0, 0, 0])];
      for (let ys = 8; ys + SK.stemH <= H - 3; ys += SK.pitch) {
        hooks.push(ys);
        parts.push(ext([rect(-dep, ys, dep + 0.01, SK.stemH)], sw), ext([rect(-dep - SK.legT, ys - SK.leg, SK.legT + 0.01, SK.stemH + SK.leg)], sw));
        draw.push({ r: [-dep - SK.legT, ys - SK.leg, dep + SK.legT, SK.stemH + SK.leg], k: 'cap' });
      }
      draw.push({ r: [0, 0, 6, H], k: 'wall' });
      if (lb) {   // label wall on the front edge
        parts.push(cube([LBL.t, H, LBL.h], [L - LBL.t, 0, 0]));
        draw.push({ r: [L - LBL.t, 0, LBL.t, H], k: 'wall' });
        info.push(['Label', `${LBL.h} mm wide strip on the front edge`]);
      }
      cells = p.lattice ? latticeHoles(8, 5, L - 5, H - 5, p.pitch, p.bar, [[0, 0, 9, H]], so.circles) : [];
      node = dif(uni(ext([rect(0, 0, L, H), ...cells], t), parts, so.add), so.sub);
      info.push(['Blade', `${f1n(L)} × ${f1n(H)} mm, sticks out ${f1n(L)} mm from the board`]);
      info.push(['Hooks', `${hooks.length} in one slot column, 40 mm apart`]);
      const thick = Math.max(...d.boards.map(b => t + b.sh + b.t + b.comp), lb ? LBL.h : sw);
      info.push(['Blade spacing', `≥ ${Math.ceil(thick / SK.row) * SK.row} mm (neighbouring slot columns are 20 mm apart, their slots sit 20 mm higher)`]);
      if (!hooks.length) warn.push('The blade is too low for a hook; make it at least 17 mm tall.');
    } else {
      // flat against the board. Hooks are separate parts printed on their side (no overhang,
      // layer lines run along the hook, its strongest direction). The plate prints on its back
      // with printed standoffs and gets SKÅDIS-sized slots; each hook goes through a plate slot
      // and a board slot, its head stays in front of the plate, its leg hooks behind the board.
      const n = Math.max(1, Math.floor((L - 20) / SK.pitch) + 1), cols = [];
      for (let k = 0; k < n; k++) cols.push(L / 2 + SK.pitch * (k - (n - 1) / 2));
      const rows = [];
      const lblY = lay.top ? H - LBL.h - 2 : 1;   // solid strip, no lattice, for the label
      for (let ys = H - lay.top - 6 - SK.slotH; ys >= 4 + (lb && !lay.top ? LBL.h + 2 : 0); ys -= SK.pitch) { rows.push(ys); if (d.sk.rows !== 'all') break; }
      const so = standoffs(d, t), cuts = [], blockers = [], hookParts = [];
      const headT = 2.5, headOver = 3, stemL = t + dep;
      for (const hx of cols) for (const ys of rows) {
        hooks.push([hx, ys]);
        cuts.push(cube([SK.slotW, SK.slotH, t + 2], [hx - SK.slotW / 2, ys, -1]));
        blockers.push([hx - SK.slotW / 2 - 3, ys - headOver - 1, hx + SK.slotW / 2 + 3, ys + SK.slotH + headOver + 1]);
        draw.push({ r: [hx - SK.slotW / 2, ys, SK.slotW, SK.slotH], k: 'cap' }, { r: [hx - sw / 2, ys - headOver, sw, SK.slotH + 2 * headOver], k: 'rail' });
      }
      // the hooks, laid out on their side below the plate
      const prof = [rect(-headT, -headOver, headT + 0.01, SK.slotH + 2 * headOver), rect(0, 0, stemL + 0.01, SK.stemH),
        rect(stemL, -SK.leg, SK.legT, SK.stemH + SK.leg)];
      const step = headT + stemL + SK.legT + 5;
      hooks.forEach((_, i) => hookParts.push(tr([headT + 2 + i * step, -10 - SK.slotH - headOver, 0], uni(prof.map(r => ext([r], sw))))));
      // slot pattern of the board behind the plate
      if (rows.length) {
        const x0 = cols[0], y0 = rows[0];
        for (let j = -Math.ceil((y0 + 20) / SK.row); j <= Math.ceil((H - y0 + 20) / SK.row); j++)
          for (let i = -Math.ceil((x0 + 40) / SK.pitch); i <= Math.ceil((L - x0 + 40) / SK.pitch); i++) {
            const sx = x0 + i * SK.pitch + (Math.abs(j) % 2) * SK.row - SK.slotW / 2, sy = y0 + j * SK.row;
            if (sx > -10 && sx < L + 10 && sy > -20 && sy < H + 5) draw.push({ r: [sx, sy, SK.slotW, SK.slotH], k: 'slot' });
          }
      }
      for (const b of d.boards) {
        const f = footprint(b);
        for (const h of b.holes) {
          if (h.off) continue;
          const sc = SCREWS[h.screw || b.screw] || SCREWS.M3, [x, y] = holeToPlate(b, h.x, h.y);
          if (blockers.some(r => x + sc.sd / 2 > r[0] && x - sc.sd / 2 < r[2] && y + sc.sd / 2 > r[1] && y - sc.sd / 2 < r[3]))
            warn.push(`${b.name}: a standoff sits on a hook slot; move the board or the holes.`);
        }
        if (b.sh < headT + 1 && blockers.some(r => f.x0 < r[2] && f.x1 > r[0] && f.y0 < r[3] && f.y1 > r[1]))
          warn.push(`${b.name}: the hook heads stick out ${headT} mm, so the standoffs must be taller over them.`);
      }
      if (lb) {
        draw.push({ r: [3, lblY, L - 6, LBL.h], k: 'rail' });
        info.push(['Label', `${LBL.h} mm solid strip at the ${lay.top ? 'top' : 'bottom'}`]);
      }
      cells = p.lattice ? latticeHoles(5, 5, L - 5, H - 5, p.pitch, p.bar, lb ? [...blockers, [0, lblY - 2, L, lblY + LBL.h + 2]] : blockers, so.circles) : [];
      node = uni(dif(uni(ext([rect(0, 0, L, H), ...cells], t), so.add), cuts, so.sub), hookParts);
      info.push(['Plate', `${f1n(L)} × ${f1n(H)} mm, ${hooks.length} hook slot${hooks.length === 1 ? '' : 's'} on the 40 mm grid`]);
      info.push(['Hooks', `${hooks.length} separate hooks, in the same file below the plate, printed on their side`]);
      info.push(['Hanging', 'push the hooks through the plate slots into the board, then slide everything down']);
      info.push(['Print', 'plate on its back, standoffs up; no supports, no overhangs']);
      if (!rows.length) warn.push('The plate is too low for a hook row; make it at least 25 mm tall.');
    }
    if (L > 240 || H > 240) warn.push('Plate is larger than 240 mm, which will not fit a 250 mm bed.');
  }

  else {
    const r = d.r10, ft = r.floor, st = R10.side_t, topZ = r.units * U - 0.8, so = standoffs(d, ft);
    // ears: how far the ear edge and the hole centre sit outside the tray edge, and on which sides
    const half = d.mode === 'rack19h', tw = L, pw = r.panelW;
    const eo = half ? R19H.ear : pw / 2 - tw / 2, ho = half ? R19H.hole : R10.pitch / 2 - tw / 2;
    const ears = half ? [r.side === 'right' ? 1 : -1] : [-1, 1];
    const parts = [cube([tw - 2 * st, 2, ft + R10.lip], [st, 0, 0])];
    // label field: the front lip goes up to LBL.h over LBL.w mm at one side, the rest stays open for ports
    const lx = r.label === 'right' ? tw - st - LBL.w : st;
    if (lb) parts.push(cube([LBL.w, 2, LBL.h], [lx, 0, 0]));
    const gz = Math.min(R10.gusset, H - 1);
    const wall = [[0, 0], [H, 0], [H, ft + R10.rear_h], [gz, topZ], [0, topZ]];
    parts.push(yz(wall, 0, st), yz(wall, tw - st, st));
    const earW = eo + st, holes = [];
    for (const sx of ears) {
      const x0 = sx < 0 ? -eo : tw - st;
      parts.push(cube([earW, R10.panel_t, topZ], [x0, 0, 0]));
      draw.push({ r: [x0, 0, earW, R10.panel_t], k: 'cap' });
      for (let u = 0; u < r.units; u++) for (const hz of [6.35, 38.1]) {
        const x = sx < 0 ? -ho : tw + ho;
        holes.push(tr([x, -1, u * U + hz], rot([-90, 0, 0], ext([teardrop(R10.hole_d, 0, -1)], R10.panel_t + 2))));
      }
    }
    cells = p.lattice ? latticeHoles(st + R10.band, R10.band, tw - st - R10.band, H - 6, p.pitch, p.bar, [], so.circles) : [];
    node = dif(uni(ext([rect(0, 0, tw, H), ...cells], ft), parts, so.add), holes, so.sub);
    draw.push({ r: [0, 0, st, H], k: 'wall' }, { r: [tw - st, 0, st, H], k: 'wall' }, { r: [st, 0, tw - 2 * st, 2], k: 'wall' });
    if (lb) {
      draw.push({ r: [lx, 0, LBL.w, 2], k: 'wall' });
      info.push(['Label', `${LBL.w} × ${LBL.h} mm on the front lip, ${r.label === 'right' ? 'right' : 'left'} side`]);
    }
    if (half) {
      info.push(['Tray', `${r.units}U, half 19", ear on the ${ears[0] > 0 ? 'right' : 'left'} rail, ${f1n(tw + eo)} mm wide, ${f1n(H)} mm deep`]);
      info.push(['Rack holes', `M6, 2 per U, on one rail only`]);
      info.push(['Support', 'held by one ear only: put a second half tray next to it or support the free side for heavy boards']);
    } else {
      info.push(['Tray', `${r.units}U, ${pw} mm across the ears, ${f1n(H)} mm deep`]);
      info.push(['Rack holes', `M6, ${R10.pitch} mm apart, 2 per U`]);
    }
    info.push(['Inner width', `${f1n(tw - 2 * st)} mm between the side walls`]);
    for (const b of d.boards) {
      const top = ft + b.sh + b.t + b.comp;
      const f = footprint(b);
      if (lb && f.y0 < 10 && f.x0 < lx + LBL.w && f.x1 > lx) warn.push(`${b.name}: the label field (${LBL.h} mm tall) sits in front of it and may cover low ports.`);
      if (top > r.units * U - 0.5) warn.push(`${b.name}: top at ${f1n(top)} mm is taller than ${r.units}U (${f1n(r.units * U)} mm).`);
    }
    if (H > 240) warn.push('Tray is deeper than 240 mm, which will not fit a 250 mm bed.');
  }
  return { node, lay, warn, info, cells, draw, flip: null, guides };
}

const f1 = v => (Math.round(v * 10) / 10).toString();
const f1n = f1;
