// The joke about the demo — one line about pairing with an AI coding agent
// while it "fixes" things. Fully deterministic: no network, no randomness,
// no clock, and no environment variables.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.";

const OUTPUT_PATH = "/output/entry.txt";

// Create /output only when it is missing; the directory is never deleted.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
