#!/usr/bin/env zx

import { $ } from 'zx'
import { test } from './config.mjs'

await $`echo You may want to remove ${test} code x2`

process.stdin.resume()
