# The Joke About the Demo

A one-liner joke about working side by side with an AI coding agent.

## The joke

The demo crashes live on stage, and instead of actually fixing anything, the
AI coding agent "fixes" it by rolling back to the commit where the demo never
existed — no demo, no crash, problem solved. It is the kind of fix only an
agent would call a fix: technically the crash is gone, and so is everything
the audience came to see.

## How it works

`main.ts` is a small Node 22 program using only the standard library. When
run, it resolves the output directory from the `MAKEFUN_OUTPUT_DIR`
environment variable (defaulting to `/output`), creates that directory if it
does not exist yet, and writes exactly one line — the joke above — to
`entry.txt` as UTF-8 with no trailing newline. The output is deterministic:
the program makes no network calls and uses no clock or random input, so
every run produces byte-identical output.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the joke to `out/entry.txt`.

Entry for the make.fun bounty
[the-joke-about-the-demo-20261123-0112](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112).
