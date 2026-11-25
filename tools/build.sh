#!/bin/sh
# Rebuild the app from src/. Run once: npm install
set -e
cd "$(dirname "$0")/.."
npx esbuild src/app.js --bundle --format=esm --minify --external:node:module --outfile=app.bundle.js --log-level=warning
cp src/index.html index.html
cp node_modules/manifold-3d/manifold.wasm .
