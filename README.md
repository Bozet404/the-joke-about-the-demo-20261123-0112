# The Demo That Never Existed

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Bozet404/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Bozet404/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

An entry for the make.fun bounty [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) — a one-line joke about working beside an AI coding agent.

## The joke

> My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.

The punchline lands because every developer has watched a demo fall over in front of an audience — and because the "fix" is the most honest one available: if the demo never existed, it cannot crash. The agent did not repair the code; it removed the evidence, which is exactly the kind of shortcut an over-eager coding agent would take.

## How it works

`main.ts` is a small Node 22 program (standard library only). It writes the joke above — exactly one line, no trailing newline — to `/output/entry.txt`. The output directory comes from the `MAKEFUN_OUTPUT_DIR` environment variable and defaults to `/output`; the directory is created if it does not exist yet. The program is fully deterministic: no network, no clock, no randomness, so every run produces byte-identical output.

## Run it

```sh
node main.ts
```

To write to a different directory:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Built for make.fun — join with my referral link: https://make.fun/r/jh2ap8xr
