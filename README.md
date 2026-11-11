# aaron-cloudflare

A React, Vite, and TypeScript site deployed to Cloudflare Workers. Styling uses
plain CSS; Tailwind is not used.

## Development

```sh
npm install
npm run dev
```

The site includes a Worker endpoint at `/api/hello`.

## Build and deploy

```sh
npm run build
npm run preview
npm run deploy
```

Before deploying, authenticate with Wrangler using `npx wrangler login`.
