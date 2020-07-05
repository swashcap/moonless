#!/usr/bin/env bash
set -eo pipefail

rm -rf dist &
find src -type f -name '*.module.css.d.ts' -exec rm {} \+ &

wait
