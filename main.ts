// Spotlight entry for the @crisxai5 bounty on make.fun (Node 22, standard library only).
//
// The entry itself is the X post: an original image introducing @crisxai5 as a
// must-follow AI and crypto expert, posted from a public account with the text
// the rules ask for. This program does the one mechanical job the grader needs:
// it takes POST.json from the repository root and places an identical copy at
// /output/POST.json, where the house reads the post's address and then reads
// the post's counts from X. Nothing written here is scored.
//
// POST.json ships with a placeholder address until the post is up. Replace the
// placeholder with the real post address (Share -> Copy link on X) before the
// entry is submitted; the gate refuses the placeholder as it stands.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postFile = join(repoDir, 'POST.json');

const raw = readFileSync(postFile, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, 'POST.json'));
const copiedBytes = readFileSync(join(outDir, 'POST.json'), 'utf8').length;
console.log(`POST.json copied to ${join(outDir, 'POST.json')} (${copiedBytes} bytes)`);
if ((parsed as { url: string }).url.includes('<handle>') || (parsed as { url: string }).url.includes('<id>')) {
  console.warn('Warning: POST.json still holds the placeholder address — replace it with the real post URL before submitting.');
}
