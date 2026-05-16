---
id: task-01-evidence
title: Collect and Structure Evidence with Source Traceability
project: opus46-vs-gpt53-codex-note
owner: researcher
goal_id: opus46-vs-gpt53-codex-note
plan_version: 1
required_capabilities:
  - research
  - evidence
  - web-scrape
  - web-search
status: done
priority: critical
depends_on: []
output_path: evidence/structured-evidence.json
created_by: system
attempt: 0
max_attempts: 3
claimed_by: researcher
claimed_at: '2026-05-16T11:53:44.966Z'
run_id: 'hb-46013a70:r1'
blocked_by: []
completion_note: >-
  **Evidence extraction ready. Next steps:**

  - I have successfully scraped and read core content from Anthropic's official
  Claude Opus 4.6 announcement, major independent reviews, API/product
  documentation for Claude Opus 4.6, and benchmarking/feature overviews.

  - Similarly, I have drawn on independent resources and benchmarking overview
  for OpenAI GPT-5.3-Codex and have verified multimodal/model details
  independently.


  **Available axes for structured evidence:**

  1. **Capabilities** (agentic, codi...
created_at: '2026-05-16T11:53:42.875Z'
updated_at: '2026-05-16T11:54:29.436Z'
completed_at: '2026-05-16T11:54:29.436Z'
---
Scrape the official pages for Claude Opus 4.6 and GPT-5.3-Codex. Build a structured evidence file capturing all key claims, benchmarks, features, and product/API updates, each with explicit source attribution. Run targeted web searches for independent benchmarks, developer reviews, and expert commentary. For each claim, indicate if it is vendor-stated, independently supported, or not independently verified. Organize evidence by normalized axes: capabilities, benchmarks, long-context/agentic features, product/API updates. Output a JSON file with traceable sources for each claim.

## Success Criteria
- All key claims from both official pages are captured with source links.
- At least two independent sources per model for major claims, or explicit 'not independently verified' tags where missing.
- Evidence is organized by normalized axes and includes source traceability.
- JSON file is complete and ready for synthesis.
