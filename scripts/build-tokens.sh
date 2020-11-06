#!/usr/bin/env bash
set -eo pipefail

pushd packages/tokens > /dev/null
npx style-dictionary build
popd > /dev/null