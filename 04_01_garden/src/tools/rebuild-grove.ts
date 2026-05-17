import { spawn } from "node:child_process";
import { join } from "node:path";

const PROJECT_ROOT = join(import.meta.dir, "../..");

function mergeOutput(stdout: string, stderr: string): string {
  if (!stdout) return stderr;
  if (!stderr) return stdout;
  return `${stdout}\n${stderr}`;
}

export async function rebuildGrove(): Promise<{ ok: boolean; output: string }> {
  return new Promise((resolve) => {
    const child = spawn("bun", ["grove/build.ts"], {
      cwd: PROJECT_ROOT,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      resolve({ ok: false, output: error.message });
    });

    child.on("close", (code) => {
      resolve({
        ok: code === 0,
        output: mergeOutput(stdout, stderr).trim() || `build exit code ${code ?? 1}`,
      });
    });
  });
}
