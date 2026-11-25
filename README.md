# PCB plate designer

Browser app for designing 3D-printable mounting plates for test boards. Pick a
mount, set each board's size and place its mounting holes anywhere (they do not
have to form a rectangle), then export STL, OpenSCAD or a design file.

## Modes

| mode | what it makes | numbers from |
|---|---|---|
| Rackerspace | blade standing on the two 15 mm bars (HomeRacker caps, 180 mm apart). Fixed with zip ties by default: each cap has channels just above the bar, so a tie goes through, down both cap walls and under the bar. M3 set screw or lock pin only are options | `rack-mount/dut_blade.scad` |
| 10" rack | flat tray with M6 ears (236.525 mm), side walls, front lip, open front | `rack-mount/flat_tray_10in.scad` |
| Hutschiene | blade that clips onto a TS35 DIN rail, same clip as the DUT blades | `rack-mount/dut_blade.scad` |
| SKÅDIS, flat | plate that hangs flat on an IKEA SKÅDIS pegboard. It prints on its back with printed standoffs and has SKÅDIS-sized slots on the 40 mm grid. Separate hooks (in the same STL, laid out below the plate) print on their side | IKEA SKÅDIS: 5 mm board, 5 x 15 mm slots, 40 mm apart, rows 20 mm apart and staggered by 20 mm |
| SKÅDIS, blade | blade that sticks out from the pegboard, hooks along its rear edge (one slot column), printed standoffs, no supports | same |

SKÅDIS hooks: a 4.4 x 6 mm stem, a 7.5 mm leg behind the board and, for the flat plate, a
2.5 mm head in front of the plate. The flat plate's hooks are separate because a hook printed
as part of a plate always has an overhang: the common SKÅDIS approach is to print hooks on
their side, so they need no support and the layer lines run along the hook. Push each hook
through a plate slot into the board slot behind it, then slide the plate down. The blade's
hooks are already in the print plane, so they stay part of the blade.

## Using it

- Several boards can share one plate. Add one from `devices.json` or start blank.
- Holes are in board coordinates (lower left corner of the board, before rotation).
  Drag them on the drawing, double-click a board to add one, type them in the table,
  use "Rectangle pattern" for the usual four, or "Paste list" for `x, y[, M3]` lines.
- Each hole can have its own screw size (M2, M2.5, M3, M4) or follow the board's,
  and can be switched off without deleting it.
- Screw holes are pilot holes for self-tapping screws, or clearance holes for a
  screw from below with a nut on the board.
- The check panel warns about boards outside the usable area, overlaps, rack
  height (10") and bed size, and shows rack units, blade spacing and hardware.
- Ctrl+Z / Ctrl+Shift+Z undo and redo; arrow keys nudge the selected hole.

## Running it locally

It loads a WebAssembly module, so it needs a web server, not file://:

    cd plate-designer && python3 -m http.server 8000   # then open http://localhost:8000

## Hosting on GitHub Pages

The app is fully static: `index.html`, `app.bundle.js` and `manifold.wasm` with
relative paths, no build or server step needed.

1. Create a repository and put the contents of this folder at its root
   (or in a `docs/` folder). Keep `.nojekyll`.
2. Push, then on GitHub open Settings → Pages, choose "Deploy from a branch",
   pick `main` and `/ (root)` (or `/docs`), and save.
3. After a minute the designer is at `https://<user>.github.io/<repo>/`.

GitHub Pages serves `.wasm` files with the right type, so the 3D preview works.
Exports download directly there (STL, SCAD, design JSON and the zip).

## Files

- `index.html`, `app.bundle.js`, `manifold.wasm`: the built app.
- `src/csg.js`: a small CSG tree that evaluates both to Manifold (live preview and
  STL) and to OpenSCAD source, so both exports describe the same part.
- `src/model.js`: the three modes. `src/app.js`: UI. `src/presets.js`: generated
  from `rack-mount/devices.json`.
- Rebuild: `npm install && sh tools/build.sh`.

The exported OpenSCAD renders to a single manifold solid in all three modes
(checked with OpenSCAD). Nothing has been printed yet: print one plate as a fit check.
