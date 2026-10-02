# Ironwood Plumbing Inc.

Commercial plumbing and hot-water infrastructure website for Ironwood Plumbing Inc.

## Run locally

**Prerequisite:** Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. It is a static site: upload the
contents of that directory to any static web host or serve the directory with
any web server. The build uses relative asset URLs, so it also works when hosted
under a subdirectory.

For Netlify, the included `netlify.toml` builds and publishes `dist/`. For other
hosts, set the build command to `npm run build` and the publish/output directory
to `dist`.
