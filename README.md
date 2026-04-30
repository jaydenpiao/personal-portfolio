# Jayden Piao Portfolio

Personal portfolio for Jayden Piao. The site is intentionally small, typed, tested, and easy for future AI agents to modify.

## Stack

- React 19
- TypeScript
- Vite
- Vitest + Testing Library
- ESLint flat config
- Plain CSS with project-level design tokens

## Local Development

```bash
nvm use
npm install
npm run dev
```

The Vite dev server prints the local URL, usually `http://localhost:5173`.

## Validation

Run the full gate before committing or opening a PR:

```bash
npm run validate
```

This runs:

```bash
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Security audit:

```bash
npm run audit
```

## Deployment

Netlify is configured through [netlify.toml](netlify.toml):

- build command: `npm run build`
- publish directory: `dist`
- Node version: `20.17.0`

## Content Model

Most content lives in [src/data/portfolio.ts](src/data/portfolio.ts):

- `hero`: headline, positioning, primary profile details
- `links`: canonical GitHub, LinkedIn, email, and resume links
- `status`: small operational signal cards
- `experience`: compact resume-style timeline
- `projects`: selected work, ordered by current strength
- `skillGroups`: grouped capabilities

Update content there first. Layout and styling live in [src/App.tsx](src/App.tsx) and [src/index.css](src/index.css).

## Agent Handoff

AI agents should start with:

1. [AGENTS.md](AGENTS.md)
2. [llm_context.md](llm_context.md)
3. [docs/ai-agent-guide.md](docs/ai-agent-guide.md)
4. [src/data/portfolio.ts](src/data/portfolio.ts)

The default safe workflow is:

```bash
npm install
npm run validate
```
