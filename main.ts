// news-image-20261124 — "Sum up 24 November's world news in one image"
// Node 22, standard library only. The repository ships entry.png, a designed
// front-page summary of Tuesday 24 November 2026 (1024x1024 PNG, ~166 KB,
// well under the 1 MiB gate). This program copies it to the output path the
// grader provides, so both grading runs produce byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

copyFileSync(source, join(outputDir, 'entry.png'));
