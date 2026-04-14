# Duedoh Official Website (Static)

This repo contains a production-ready static marketing site for **Duedoh** (travel safety + verified local companions).

## Run locally

- Open `index.html` directly, or run a local server:
  - `python3 -m http.server 5173`
  - Then visit `http://localhost:5173`

## Deploy

Deploy the folder as static files (Netlify, Vercel Static, Cloudflare Pages, S3, etc.).

## Notes

- The “Sample screens” are SVG mockups aligned to the MVP 5-screen booking flow.
- The contact form is intentionally non-submitting (static demo); wire it to your backend or a form provider.
- Update the production domain in `index.html`, `robots.txt`, and `sitemap.xml` before going live.
