import { spawn } from "node:child_process";

const port = 3100;
const baseUrl = `http://localhost:${port}`;
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-p", String(port)],
  { stdio: "inherit" },
);

async function waitForServer() {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Bridgepath did not start at ${baseUrl} within 60 seconds.`);
}

let exitCode = 1;
try {
  await waitForServer();
  exitCode = await new Promise((resolve, reject) => {
    const tests = spawn(
      process.execPath,
      ["node_modules/playwright/cli.js", "test"],
      { stdio: "inherit", env: { ...process.env, BRIDGEPATH_E2E_BASE_URL: baseUrl } },
    );
    tests.on("error", reject);
    tests.on("exit", (code) => resolve(code ?? 1));
  });
} finally {
  server.kill();
}

process.exitCode = exitCode;
