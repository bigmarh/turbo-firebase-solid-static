# Turborepo Template: Firebase Functions API + SolidJS + Static Tailwind

This is a custom Turborepo template featuring:

- `apps/api` — Firebase Functions API with TypeScript
- `apps/static` — Static HTML + TailwindCSS site
- `apps/solid` — SolidJS + Tailwind + TypeScript app
- `packages/tsconfig` — shared TypeScript configs
- `packages/utils` — shared utilities package

## Usage with create-turbo

You can scaffold this template via `create-turbo` using a local path during development:

```bash
npm create turbo@latest -- --example /absolute/path/to/turbo-firebase-solid-static
```

After publishing this folder to a repository, pass its URL to `--example`.

## Scripts

- `pnpm dev` — run all apps in dev mode
- `pnpm build` — build all apps and packages
- `pnpm deploy` — run `deploy` across apps (e.g., deploy functions)
- `pnpm preview` — preview Vite apps

## Structure

```text
apps/
  api/        # Firebase Functions API (TypeScript)
  static/     # Static HTML + Tailwind
  solid/      # SolidJS + Tailwind + TS
packages/
  tsconfig/   # Shared TS configs
  utils/      # Shared utilities
```

## Notes

- Update `.firebaserc` and scripts under `apps/api/functions` with your Firebase project ID.
- `packages/tsconfig` is used by `packages/utils` and can be used by apps by extending its configs.


