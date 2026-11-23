# The joke about the demo

Entry for the make.fun bounty [the-joke-about-the-demo-20261123-0112](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) ($50, top 20, deadline 23 Nov 2026 11:12 WIB).

`main.ts` (Node 22) writes a single text to `/output/entry.txt`: a one-line joke about working alongside an AI coding agent.

> My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.

## Run

```sh
node main.ts
```

Deterministic: no network, no randomness, no clock, no environment. `/output` is created only when it is missing and is never deleted.

## License

MIT, see LICENSE.
