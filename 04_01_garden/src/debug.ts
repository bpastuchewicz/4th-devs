import { LazySandbox, WORKDIR } from "./sandbox/client";

const lazySandbox = new LazySandbox();

console.log("creating local sandbox...");
const sandbox = await lazySandbox.get();
console.log("local sandbox created");

const REPO = process.env.GITHUB_REPO ?? "";
const TOKEN = process.env.GITHUB_TOKEN ?? "";

// Test 1: Is git available as a shell command?
console.log("\n--- git version ---");
const gitVer = await sandbox.process.executeCommand("git --version");
console.log("exit:", gitVer.exitCode, "result:", gitVer.result);

// Test 2: Try shell git clone --depth 1
if (REPO && TOKEN) {
  console.log("\n--- shell git clone --depth 1 ---");
  const authedUrl = REPO.replace("https://", `https://git:${TOKEN}@`);
  const clone = await sandbox.process.executeCommand(
    `git clone --depth 1 ${authedUrl} ${WORKDIR} 2>&1`,
  );
  console.log("exit:", clone.exitCode, "result:", clone.result);
} else {
  console.log("\n--- shell git clone --depth 1 ---");
  console.log("skip: set GITHUB_REPO and GITHUB_TOKEN to test cloning");
}

// Test 3: Check what we got
console.log("\n--- ls workspace/repo ---");
const ls = await sandbox.process.executeCommand(`ls -la ${WORKDIR}`);
console.log("exit:", ls.exitCode, "result:", ls.result);

await lazySandbox.destroy();
console.log("done");
