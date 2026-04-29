# LLM Context

## Project Purpose

This is Jayden Piao's personal portfolio. It should present Jayden as a software engineer focused on AI systems, developer tools, distributed systems, and polished product web apps.

The previous site was a 2023-2024 Create React App portfolio with hardcoded JSX, stale class-year copy, old hackathon projects, and unused dependencies. The current direction is a smaller Vite/TypeScript app with typed content and clear validation gates.

## Current Positioning

Use this framing when updating copy:

> Jayden builds AI systems, developer tools, distributed-systems experiments, and product-focused web apps with clean interfaces, observable behavior, and reliable handoffs.

Avoid stale wording:

- "third year"
- "Junior at UBC"
- generic "aspiring software engineer"
- project descriptions that only list technologies

## Strongest Current Projects

Feature these first unless the user says otherwise:

1. Quorum - AI-agent control plane with policy-gated execution, quorum voting, health checks, rollback, and tamper-evident event logs.
2. Quorum Coordination Service - Go Multi-Paxos coordination service with KV, leases, watches, WAL, snapshots, fault scenarios, and TLA+ modeling.
3. 3D-Viz-Tool - TypeScript React/Vite visualization console with API, shared contracts, and SSE.
4. hey-spotify - Spotify voice assistant with OAuth PKCE, Whisper, GPT-4o intent parsing, wake-word detection, and fallback parsing.
5. AI Closet Planner - React/FastAPI/Supabase outfit planning MVP with structured generated outfits and saved outfit flows.

Older projects can remain as secondary proof, but should not lead the portfolio.

## Repo Shape

Important files:

- `src/data/portfolio.ts`: typed content source of truth
- `src/App.tsx`: section rendering and component structure
- `src/index.css`: visual system and responsive layout
- `src/App.test.tsx`: rendered app expectations
- `src/data/portfolio.test.ts`: content and ordering expectations
- `AGENTS.md`: agent startup instructions
- `docs/ai-agent-guide.md`: workflow and maintenance guide

## Validation Contract

Before claiming work is done, run:

```bash
npm run validate
```

If deployment metadata changes, also check:

```bash
npm run build
```

If dependency metadata changes, also check:

```bash
npm run audit
```

## Constraints

- Keep generated build output out of git.
- Keep local screenshots and browser output out of git.
- Keep content changes data-driven.
- Do not reintroduce Create React App.
- Do not reintroduce Tailwind unless there is a clear reason and tests/build remain clean.
- Do not claim `jaydenpiao.tech` is live without checking DNS/deployment.
