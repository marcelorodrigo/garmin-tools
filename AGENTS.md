# Garmin Tools

## Tech Stack

- **Framework**: Nuxt 4, SPA mode (`ssr: false`)
- **UI**: Nuxt UI v4, TailwindCSS v4
- **Package Manager**: pnpm 11.8.0
- **Node**: 26.x (see `.node-version`, `.nvmrc`)
- **TypeScript**: 6.0.3

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server at `localhost:3000` |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm lint` | ESLint v10 flat config (from `eslint.config.mjs`) |
| `pnpm typecheck` | `nuxt typecheck` (vue-tsc) |
| `pnpm postinstall` | `nuxt prepare` — generates `.nuxt/` types. Runs automatically on install. |

## Required: Run lint + typecheck before committing

```bash
pnpm lint && pnpm typecheck
```

CI (`.github/workflows/ci.yml`) runs `pnpm install` → `pnpm run lint` → `pnpm run typecheck` on every push/PR to `master`.

## Lint specifics

- ESLint flat config via `eslint.config.mjs`, imports `./.nuxt/eslint.config.mjs`
- Nuxt ESLint stylistic: `commaDangle: never`, `braceStyle: 1tbs`

## No test framework configured

`package.json` has no test script and no test dependencies. Do not assume any test runner exists.

## Generated files

`.nuxt/` is gitignored but required for typechecking and ESLint. Run `pnpm install` (or `nuxt prepare`) to regenerate.
