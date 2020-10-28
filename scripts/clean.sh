#!/usr/bin/env bash
set -eo pipefail

find packages -type d -name dist -exec rm -rf {} \+ &
find src -type f -name '*.module.css.d.ts' -exec rm {} \+ &

wait
