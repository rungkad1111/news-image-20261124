// news-image-20261124 — "Sum up 24 November's world news in one image"
// Node 22, standard library only. The repository ships entry.png, a designed
// front-page summary of Tuesday 24 November 2026 (1024x1024 PNG, ~166 KB,
// well under the 1 MiB gate). This program copies it to the output path the
// grader provides, so both grading runs produce byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// Sanity-check the shipped image before copying: it must be a PNG and stay
// under the competition's 1 MiB gate, so a bad asset fails loudly here
// instead of producing an invalid entry in the grader.
const bytes = readFileSync(source);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = PNG_SIGNATURE.every((b, i) => bytes[i] === b);
if (!isPng) throw new Error('entry.png is not a PNG file');
if (bytes.length > 1_048_576) throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);

copyFileSync(source, join(outputDir, 'entry.png'));
