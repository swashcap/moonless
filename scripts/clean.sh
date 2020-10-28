#!/usr/bin/env bash
set -eo pipefail

find packages -type d \( -name dist -o -name node_modules \) -maxdepth 3 -exec rm -rf {} \+ &
find packages -type f -name '*.module.css.d.ts' -exec rm {} \+ &

wait
