# Repository Guidelines

## Project Structure & Module Organization
- Vite + React 19 + TypeScript (strict); entry in `src/main.tsx`, root layout in `src/App.tsx`.
- UI split into `src/components/layout` (chrome), `src/components/features` (page sections), `src/components/ui` (reusable primitives), and `src/contexts` for shared state such as `VariantsContext`.
- Data mocks live in `src/data`; shared helpers in `src/lib/utils.ts` (`cn` for class merging). Assets sit in `src/assets`; static files belong in `public`; production output is generated in `dist/`.

## Build, Test, and Development Commands
- `npm run dev` — start the Vite dev server with hot reload.
- `npm run build` — run `tsc -b` type checks, then bundle to `dist/`.
- `npm run preview` — serve the production build locally for QA.
- `npm run lint` — ESLint over all TS/TSX; resolve findings before sending changes.
- Install deps with `npm install`; no pinned Node version is provided, so align with the team’s standard runtime.

## Coding Style & Naming Conventions
- Stick to TypeScript strictness; prefer typed props and derived types over `any`.
- Components and files use PascalCase; data/util files follow lowerCamelCase (e.g., `variantsData.ts`, `utils.ts`).
- Favor functional components and hooks; keep feature logic inside `src/components/features` and shared chrome in `src/components/layout`.
- Use Tailwind utility classes for styling; merge dynamic class lists via `cn()` instead of manual concatenation.
- Match surrounding indentation (project leans toward 2 spaces) and keep semicolons consistent within each file.

## Testing Guidelines
- Automated tests are not configured yet; manually verify flows with `npm run dev` and `npm run preview` before sharing.
- When adding tests, align on Vitest + React Testing Library; mirror component names (e.g., `ComponentName.test.tsx`) near the related feature folder and cover state variants and edge cases.
- Document manual QA steps and any known gaps in PRs until automated coverage is established.

## Commit & Pull Request Guidelines
- Use clear, imperative commit subjects (`Add timeline card actions`, `Refine Tabs spacing`); keep scopes focused.
- PRs should include a concise summary, rationale, and screenshots/GIFs for UI changes; note reproduction steps and what was tested.
- Reference related tasks/issues, and call out breaking changes or new environment variables explicitly.

## Security & Configuration Tips
- Never commit secrets; prefer `.env.local` for machine-specific values and access via `import.meta.env`.
- Keep `dist/` and other generated artifacts untracked; validate the necessity of new dependencies before adding them.
