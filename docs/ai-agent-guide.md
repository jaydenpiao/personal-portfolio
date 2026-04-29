# AI Agent Guide

## Operating Model

This repo is optimized for small agent handoffs. A new agent should be able to inspect the context, edit one surface, run one validation command, and produce a reviewable diff.

## Common Tasks

### Update profile copy

Edit `src/data/portfolio.ts`.

Run:

```bash
npm run test:run
npm run build
```

### Update resume or experience

Edit `portfolio.experience` and `portfolio.links.resume` in `src/data/portfolio.ts`.
Store the current public resume PDF in `public/jaydenpiao_resume.pdf`.

If experience ordering changes, update `src/data/portfolio.test.ts` and `src/App.test.tsx`.

Run:

```bash
npm run validate
```

### Add or reorder projects

Edit `portfolio.projects` in `src/data/portfolio.ts`.

If featured project order changes, update `src/data/portfolio.test.ts`.

Run:

```bash
npm run test:run -- src/data/portfolio.test.ts src/App.test.tsx
npm run validate
```

### Adjust layout or styling

Edit `src/App.tsx` and `src/index.css`.

Check desktop and mobile manually through the Vite dev server:

```bash
npm run dev
```

Then run:

```bash
npm run validate
```

### Update tooling

Edit `package.json`, `package-lock.json`, and the relevant config file.

Run:

```bash
nvm use
npm install
npm run validate
npm run audit
```

## File Boundaries

| File | Responsibility |
| --- | --- |
| `src/data/portfolio.ts` | All portfolio content and ordering |
| `src/App.tsx` | Rendered sections and local presentational components |
| `src/index.css` | Tokens, layout, responsive behavior, states |
| `src/App.test.tsx` | Rendered behavior and accessible links |
| `src/data/portfolio.test.ts` | Content expectations and featured order |
| `AGENTS.md` | Short instructions for future agents |
| `llm_context.md` | Longer project context and copy direction |

## Review Checklist

Before submitting a change:

- Content still reflects current work.
- Experience still reflects the latest resume and appears before projects.
- Featured projects are ordered by signal strength.
- Hero copy does not mention stale class-year framing.
- All external links are intentional.
- Mobile layout does not overflow.
- `npm run validate` passes.
- `npm run audit` has no known unresolved production issue.

## Publishing Notes

Prefer small branches and draft PRs.

Suggested branch format:

```text
codex/<short-description>
```

Suggested PR title format:

```text
[codex] <short description>
```

The canonical public site is `https://jaydenpiao.netlify.app/`. Do not replace it with an old custom domain.
