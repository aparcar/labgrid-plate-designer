// Self-check: every mode/option builds one manifold solid (flat SKÅDIS: plate + loose hooks)
// and the front label field is solid. Run: node tools/check.mjs
import assert from 'node:assert';
import Module from 'manifold-3d';
import { defaultDesign, build } from '../src/model.js';
import { toManifold } from '../src/csg.js';

const W = await Module(); W.setup();
const cases = [
  ['homeracker', {}, [1, 50, 8]],
  ['homeracker', { hr: { label: 'right' } }, [-1, 50, 8]],
  ['din', {}, [50, -1, 8]],          // y = -1: just inside the top edge
  ['skadis', { sk: { style: 'blade' } }, [-1, 15, 8]],
  ['skadis', { sk: { label: 'bottom' } }, [50, 8, 1.5]],
  ['skadis', { sk: { label: 'top' } }, [50, -9, 1.5]],
  ['rack10', { r10: { label: 'left' } }, [20, 1, 10]],
  ['rack10', { r10: { label: 'right' } }, [-20, 1, 10]],
  ['rack19h', { r10: { side: 'left' } }, [20, 1, 10]],
  ['rack19h', { r10: { side: 'right', label: 'right' } }, [-20, 1, 10]],
];
// label off: every mode still builds and has no label
for (const [mode, over] of cases.slice()) cases.push([mode, { ...over, plate: { label: false } }, null]);
for (const [mode, over, probeAt] of cases) {
  const d = defaultDesign();
  d.mode = mode;
  for (const k in over) Object.assign(d[k], over[k]);
  const r = build(d), o = toManifold(r.node, W);
  const m = new W.Manifold(new W.Mesh({ numProp: 3, vertProperties: o.pos, triVerts: o.idx })), parts = m.decompose().length;
  assert.equal(m.status(), 'NoError', mode);
  const hooks = mode === 'skadis' && d.sk.style === 'flat' ? r.info.find(i => i[0] === 'Hooks')[1].split(' ')[0] : 0;
  assert.equal(parts, 1 + +hooks, `${mode} ${JSON.stringify(over)}: ${parts} parts`);
  if (probeAt) {
    // probe point in the label field (negative x/y count from the far edge)
    const [px, py, pz] = probeAt, x = px < 0 ? r.lay.L + px : px, y = py < 0 ? r.lay.H + py : py;
    const probe = W.Manifold.cube([0.2, 0.2, 0.2], true).translate([x, y, pz]);
    assert(m.intersect(probe).volume() > 0.007, `${mode} ${JSON.stringify(over)}: no label at ${x},${y},${pz}`);
  } else assert(!r.info.some(i => i[0] === 'Label'), `${mode}: label still listed while off`);
  console.log('ok', mode, JSON.stringify(over), r.info.find(i => i[0] === 'Label')?.[1] ?? 'no label', r.warn.join(' | '));
}
