# pi-theme-jellybeans

Public Pi theme package providing Jellybeans Mono variants.

## Scope

- Theme JSON files only
- Metadata in `package.json` and `README.md`

## Rules

- Keep theme JSON valid and consistent.
- Avoid breaking key names used by Pi theme loader.
- Keep theme preview references up to date.

## Quality gates

```bash
pnpm lint
pnpm test
```

## Versioning

Uses changesets.

- `patch`: color tweaks, metadata/docs fixes
- `minor`: new theme variants, non-breaking additions
- `major`: breaking schema/compat changes
