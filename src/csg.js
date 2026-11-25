// Tiny CSG tree that evaluates to Manifold (live preview + STL) and to
// OpenSCAD source (SCAD export), so both exports come from one description.

export const cube = (s, p) => (p ? tr(p, { t: 'cube', s }) : { t: 'cube', s });
export const cyl = (h, r1, r2 = r1, fn = 40) => ({ t: 'cyl', h, r1, r2, fn });
// polys: list of closed 2D polygons, combined even-odd (first = outline, rest = holes)
export const ext = (polys, h) => ({ t: 'ext', polys, h });
export const tr = (v, c) => ({ t: 'tr', v, c });
export const rot = (v, c) => ({ t: 'rot', v, c });
export const uni = (...c) => ({ t: 'uni', c: c.flat(Infinity).filter(Boolean) });
export const dif = (a, ...b) => ({ t: 'dif', c: [a, ...b.flat(Infinity).filter(Boolean)] });

export const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];

export function hull2(pts) {
  const p = pts.map(q => [q[0], q[1]]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
export const circlePts = (r, n = 32, cx = 0, cy = 0) =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n)]);
// teardrop: circle plus a 45 degree point towards 2D direction (dx, dy)
export const teardrop = (d, dx = 0, dy = 1) =>
  hull2([...circlePts(d / 2, 32), [dx * d / 2 * Math.SQRT2, dy * d / 2 * Math.SQRT2]]);

// ---------------- Manifold ----------------
export function toManifold(node, W) {
  const made = [];
  const keep = m => (made.push(m), m);
  const ev = n => {
    switch (n.t) {
      case 'cube': return keep(W.Manifold.cube(n.s));
      case 'cyl': return keep(W.Manifold.cylinder(n.h, n.r1, n.r2, n.fn));
      case 'ext': {
        const cs = new W.CrossSection(n.polys, 'EvenOdd'); made.push(cs);
        return keep(cs.extrude(n.h));
      }
      case 'tr': return keep(ev(n.c).translate(n.v));
      case 'rot': return keep(ev(n.c).rotate(n.v));
      case 'uni': return keep(W.Manifold.union(n.c.map(ev)));
      case 'dif': {
        const [a, ...b] = n.c.map(ev);
        return b.length ? keep(a.subtract(keep(W.Manifold.union(b)))) : a;
      }
    }
    throw new Error('bad node ' + n.t);
  };
  const res = ev(node);
  const mesh = res.getMesh();
  const out = {
    pos: Float32Array.from(mesh.vertProperties.filter((_, i) => i % mesh.numProp < 3)),
    idx: Uint32Array.from(mesh.triVerts),
    volume: res.volume(),
    bbox: res.boundingBox(),
  };
  for (const m of made) try { m.delete(); } catch (e) { /* already freed */ }
  return out;
}

// ---------------- OpenSCAD ----------------
const f = v => {
  const r = Math.round(v * 1e4) / 1e4;
  return Object.is(r, -0) ? '0' : String(r);
};
const vec = a => '[' + a.map(f).join(', ') + ']';

export function toScad(node, ind = '') {
  const i2 = ind + '  ';
  const kids = c => c.map(k => toScad(k, i2)).join('\n');
  switch (node.t) {
    case 'cube': return `${ind}cube(${vec(node.s)});`;
    case 'cyl': return `${ind}cylinder(h = ${f(node.h)}, r1 = ${f(node.r1)}, r2 = ${f(node.r2)}, $fn = ${node.fn});`;
    case 'ext': {
      const pts = [], paths = [];
      for (const p of node.polys) { paths.push(p.map((_, k) => pts.length + k)); pts.push(...p); }
      return `${ind}linear_extrude(${f(node.h)}) polygon(points = [${pts.map(vec).join(',')}], paths = [${paths.map(p => '[' + p.join(',') + ']').join(',')}]);`;
    }
    case 'tr': return `${ind}translate(${vec(node.v)})\n${toScad(node.c, i2)}`;
    case 'rot': return `${ind}rotate(${vec(node.v)})\n${toScad(node.c, i2)}`;
    case 'uni': return `${ind}union() {\n${kids(node.c)}\n${ind}}`;
    case 'dif': return `${ind}difference() {\n${kids(node.c)}\n${ind}}`;
  }
}
