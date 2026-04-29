# Agent Instructions

This repository is a small, production-minded personal portfolio. Keep it easy for future AI agents to inspect, change, verify, and ship.

## Start Here

Read these files before editing:

1. `README.md`
2. `llm_context.md`
3. `docs/ai-agent-guide.md`
4. `src/data/portfolio.ts`

## Source Of Truth

- Portfolio content: `src/data/portfolio.ts`
- Main React surface: `src/App.tsx`
- Styling and design tokens: `src/index.css`
- Tests: `src/**/*.test.ts` and `src/**/*.test.tsx`
- Build tooling: `package.json`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`

Do not scatter portfolio copy across components unless the copy is purely structural UI text.

## Commands

Use these commands for validation:

```bash
nvm use
npm install
npm run lint
npm run typecheck
npm run test:run
npm run build
npm run validate
npm run audit
```

`npm run validate` is the main pre-PR gate.

## Coding Standards

- Keep content data-driven.
- Keep components semantic and accessible.
- Prefer small focused changes over broad rewrites.
- Use typed data structures for portfolio content.
- Add or update tests when changing rendered behavior or content order.
- Avoid bringing back large framework dependencies without a clear reason.
- Avoid adding build artifacts, screenshots, or local browser output to commits.

## Design Direction

The site should feel like a serious engineering portfolio, not a generic student landing page.

Current design priorities:

- current engineering identity over school-year framing
- technical project depth over decorative visuals
- compact, scannable sections
- strong mobile layout
- plain CSS tokens rather than utility-class soup

## Known External State

- The GitHub repository homepage metadata points at `https://jaydenpiao.tech/`.
- DNS for `jaydenpiao.tech` did not resolve from the local environment during the 2026-04-28 revamp.
- Verify deployment/DNS separately before claiming the public site is live.
