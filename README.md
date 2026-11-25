# Spotlight @crisxai5: AI & Crypto Expert on X

[![Spotlight @crisxai5](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/competitions/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![Rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/dankurniaone/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/rank.svg)](https://make.fun/competitions/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![Reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/dankurniaone/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/reward.svg)](https://make.fun/competitions/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)

A make.fun entry for the [Spotlight @crisxai5 bounty](https://make.fun/competitions/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad): an original image introducing [@crisxai5](https://x.com/crisxai5) as a must-follow AI and crypto expert, posted on X from a public account.

## The post

The entry is the X post itself. Places go by the post's likes, reposts and quotes at the deadline (`score = likes + reposts + quotes`). The post's text carries `@crisxai5`, `https://x.com/crisxai5`, hashtags (`#AI` `#Crypto` `#AIAgents` `#Web3`) and one of the account's make.fun play codes. The image attached to the post is `assets/spotlight-crisxai5-card.png`: a phone-readable spotlight card — dark terminal-style design, `@crisxai5` as the hero, and the three things the account covers: AI agents, crypto insights, Web3 innovation. Note: the image file is not in this commit yet. The image model refused the generation in the build session, so the card still has to be made (image tool, fresh attempt) and added to `assets/` before the post goes up. No drawn stand-in is shipped.

## What this repo holds

- `main.ts` — the program the grader runs (Node 22, stdlib only). It validates `POST.json` and copies it to `/output/POST.json`. That is all it does; the house reads the post itself.
- `POST.json` — the address of the X post. It holds a placeholder until the post is up; replace it with the real post address before submitting.
- `assets/spotlight-crisxai5-card.png` — the image attached to the post.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
