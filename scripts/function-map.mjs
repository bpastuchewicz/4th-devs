#!/usr/bin/env node
/**
 * Extracts exported functions and their call relationships from TS files.
 * Generates per-module Mermaid flowcharts in doc/functions/.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'doc', 'functions');

// All modules to scan
const MODULES = [
  '03_01_observability', '03_01_evals',
  '03_02_code', '03_02_email', '03_02_events',
  '03_03_browser', '03_03_calendar', '03_03_language',
  '03_04_gmail',
  '03_05_apps', '03_05_artifacts', '03_05_awareness', '03_05_render',
  '04_01_garden', '04_04_system', '04_05_apps', '04_05_review',
  '05_01_agent_graph', '05_02_ui', '05_02_voice',
  '05_03_autoprompt', '05_03_ax', '05_03_coding',
  '05_04_api', '05_04_ui',
];

// Regex patterns
const FUNC_DECL = [
  // export (async) function name
  /export\s+(?:async\s+)?function\s+(\w+)/g,
  // export const name = (async) (function|arrow)
  /export\s+const\s+(\w+)\s*=\s*(?:async\s+)?(?:function|\(|async\s*\()/g,
  // non-exported: const/function at top level (indentation = 0)
  /^(?:async\s+)?function\s+(\w+)/gm,
  /^const\s+(\w+)\s*=\s*(?:async\s+)?\(/gm,
  /^const\s+(\w+)\s*=\s*async\s+function/gm,
];

// safe id for mermaid
function mid(s) {
  return s.replace(/[^a-zA-Z0-9_]/g, '_').replace(/^_+/, '');
}

function collectTsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules', 'dist', '.git'].includes(e.name)) {
      result.push(...collectTsFiles(full));
    } else if (e.isFile() && (e.name.endsWith('.ts') || e.name.endsWith('.js')) && !e.name.endsWith('.d.ts') && !e.name.endsWith('.min.js')) {
      result.push(full);
    }
  }
  return result;
}

function extractFunctions(code) {
  const names = new Set();
  for (const pattern of FUNC_DECL) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(code)) !== null) {
      if (m[1] && m[1].length > 1) names.add(m[1]);
    }
  }
  return [...names];
}

function extractCalls(code, allFunctions) {
  const calls = new Set();
  // look for functionName( — but not declarations
  for (const fn of allFunctions) {
    // call site: word boundary + name + (
    const re = new RegExp(`(?<![a-zA-Z0-9_])${fn}\\s*\\(`, 'g');
    if (re.test(code)) calls.add(fn);
  }
  return [...calls];
}

function buildCallGraph(moduleDir, moduleName) {
  const srcDir = path.join(moduleDir, 'src');
  const files = collectTsFiles(srcDir);
  if (files.length === 0) return null;

  // Step 1: collect all function names across all files
  const fileData = {}; // filePath -> { code, functions }
  const allFunctions = new Set();

  for (const f of files) {
    try {
      const code = fs.readFileSync(f, 'utf8');
      const fns = extractFunctions(code);
      fileData[f] = { code, functions: fns };
      fns.forEach(fn => allFunctions.add(fn));
    } catch { /* skip */ }
  }

  if (allFunctions.size === 0) return null;

  const allFnList = [...allFunctions];

  // Step 2: for each function, find which other functions it calls
  // Map: function -> Set<callee>
  const callGraph = new Map(); // caller -> Set<callee>
  const funcToFile = new Map(); // function -> relative file path

  for (const f of files) {
    const { code, functions } = fileData[f];
        const relFile = path.relative(moduleDir, f);

    for (const fn of functions) {
      if (!funcToFile.has(fn)) funcToFile.set(fn, relFile);
      if (!callGraph.has(fn)) callGraph.set(fn, new Set());

      // Extract the body of this function (rough heuristic)
      const fnBodyStart = (() => {
        const patterns = [
          new RegExp(`(?:export\\s+)?(?:async\\s+)?function\\s+${fn}\\s*\\(`),
          new RegExp(`(?:export\\s+)?const\\s+${fn}\\s*=`),
        ];
        for (const p of patterns) {
          const idx = code.search(p);
          if (idx >= 0) return idx;
        }
        return -1;
      })();

      if (fnBodyStart < 0) continue;

      // rough body: next 3000 chars
      const body = code.slice(fnBodyStart, fnBodyStart + 3000);

      for (const callee of allFnList) {
        if (callee === fn) continue;
        const callRe = new RegExp(`(?<![a-zA-Z0-9_])${callee}\\s*\\(`, 'g');
        if (callRe.test(body)) {
          callGraph.get(fn).add(callee);
        }
      }
    }
  }

  return { callGraph, funcToFile, moduleName };
}

function renderMermaid(graphData, moduleName) {
  const { callGraph, funcToFile } = graphData;

  // Only include nodes that have edges
  const usedNodes = new Set();
  for (const [caller, callees] of callGraph) {
    if (callees.size > 0) {
      usedNodes.add(caller);
      for (const c of callees) usedNodes.add(c);
    }
  }

  if (usedNodes.size === 0) return null;

  // Group nodes by file
  const fileGroups = new Map();
  for (const fn of usedNodes) {
    const file = funcToFile.get(fn) || 'unknown';
    const short = file.replace(/^src\//, '').replace(/\.ts$/, '');
    if (!fileGroups.has(short)) fileGroups.set(short, []);
    fileGroups.get(short).push(fn);
  }

  const lines = ['```mermaid', 'flowchart TD'];

  // subgraphs per file
  for (const [file, fns] of fileGroups) {
    const sgId = mid(file);
    lines.push(`  subgraph ${sgId}["${file}"]`);
    for (const fn of fns) {
      lines.push(`    ${mid(fn)}["${fn}()"]`);
    }
    lines.push('  end');
  }

  // edges
  for (const [caller, callees] of callGraph) {
    if (!usedNodes.has(caller)) continue;
    for (const callee of callees) {
      if (!usedNodes.has(callee)) continue;
      lines.push(`  ${mid(caller)} --> ${mid(callee)}`);
    }
  }

  lines.push('```');
  return lines.join('\n');
}

function processModule(modName) {
  const moduleDir = path.join(ROOT, modName);
  if (!fs.existsSync(moduleDir)) {
    return { modName, status: 'not_found' };
  }

  const graphData = buildCallGraph(moduleDir, modName);
  if (!graphData) {
    return { modName, status: 'no_functions' };
  }

  const mermaid = renderMermaid(graphData, modName);
  if (!mermaid) {
    return { modName, status: 'no_edges' };
  }

  // Also build a function list
  const funcList = [...graphData.callGraph.keys()]
    .filter(fn => (graphData.callGraph.get(fn).size > 0) ||
      [...graphData.callGraph.values()].some(s => s.has(fn)))
    .map(fn => {
      const callees = [...(graphData.callGraph.get(fn) || [])];
      const file = graphData.funcToFile.get(fn) || '?';
      return `| \`${fn}\` | \`${file.replace(/^src\//, '')}\` | ${callees.map(c => `\`${c}\``).join(', ')} |`;
    });

  const md = [
    `# ${modName} — Mapa zależności funkcji`,
    '',
    '## Diagram Mermaid',
    '',
    mermaid,
    '',
    '## Tabela wywołań',
    '',
    '| Funkcja | Plik | Wywołuje |',
    '|---------|------|----------|',
    ...funcList,
  ].join('\n');

  return { modName, status: 'ok', md };
}

// Create output directory
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Process all modules
const results = { ok: [], no_functions: [], not_found: [], no_edges: [] };

for (const modName of MODULES) {
  process.stdout.write(`Processing ${modName}... `);
  const result = processModule(modName);
  results[result.status] = results[result.status] || [];
  results[result.status].push(modName);

  if (result.status === 'ok') {
    const outFile = path.join(OUT_DIR, `${modName}_functions.md`);
    fs.writeFileSync(outFile, result.md, 'utf8');
    console.log(`OK → doc/functions/${modName}_functions.md`);
  } else {
    console.log(result.status);
  }
}

// Generate index
const indexLines = [
  '# Mapa zależności funkcji — Indeks',
  '',
  'Wygenerowane automatycznie przez `scripts/function-map.mjs`.',
  '',
  '## Moduły z mapą',
  '',
];
for (const mod of results.ok || []) {
  indexLines.push(`- [${mod}](./${mod}_functions.md)`);
}
if ((results.no_functions || []).length > 0) {
  indexLines.push('', '## Moduły bez wykrytych funkcji', '');
  for (const mod of results.no_functions) indexLines.push(`- ${mod}`);
}
if ((results.not_found || []).length > 0) {
  indexLines.push('', '## Katalogi nieznalezione', '');
  for (const mod of results.not_found) indexLines.push(`- ${mod}`);
}

fs.writeFileSync(path.join(OUT_DIR, 'index.md'), indexLines.join('\n'), 'utf8');
console.log('\nIndex zapisany w doc/functions/index.md');
