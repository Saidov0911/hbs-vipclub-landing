# HBS VIP Club Landing

Static frontend landing page for HBS VIP Club built with Vite, React, and TypeScript.

## Local run

```bash
npm ci
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

## Docker deploy

```bash
docker compose up -d --build
```

The app is served by Nginx inside the container on port `80` and exposed on the host as port `4200`.
SPA routing is handled with `try_files ... /index.html`.
