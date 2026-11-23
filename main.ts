import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working alongside an AI coding agent.
// Deterministic: no network, no randomness, no clock, no environment.
const JOKE =
  "My AI coding agent fixed the demo crash live on stage — by rolling back to the commit where the demo never existed.";

// Create /output only when it is missing; never delete it.
mkdirSync("/output", { recursive: true });

writeFileSync("/output/entry.txt", JOKE, "utf8");
