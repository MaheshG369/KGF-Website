# kolargoldfields.in - Kolar Gold Fields Portal
Tech: Next.js (React) + Tailwind + Cloudflare Pages + D1 + R2 - Single Deployment, Plug & Play

## MAP - I want to change X, which file?

| Change | Open ONLY this file |
|---|---|
| Add/Edit Driver | src/infrastructure/db/seed.ts -> seedDrivers |
| Add/Edit Property | src/infrastructure/db/seed.ts -> seedProperties |
| Add/Edit MLA/Councillor | src/infrastructure/db/seed.ts -> seedLeaders |
| Change Home Page | src/app/page.tsx |
| Change Drivers Page | src/app/drivers/page.tsx |
| Change Property Page | src/app/property/page.tsx |
| Change Leaders Page | src/app/leaders/page.tsx |
| Change Header/Menu | src/app/layout.tsx |
| Change Colours | src/app/globals.css |
| Change Database Memory->D1->Postgres | src/infrastructure/db/index.ts + .env DB_TYPE= |
| Change Storage Memory->R2 | src/infrastructure/storage/index.ts + .env STORAGE_TYPE= |
| Change Domain free->kolargoldfields.in | .env NEXT_PUBLIC_SITE_URL + Cloudflare Dashboard Custom Domains |
| Change Hosting Cloudflare->Railway | wrangler.toml / Dockerfile only |
| Approve Property/Driver | seed.ts -> status:approved / verified:true |

## RULE - Plug & Play
Pages NEVER talk to Database. Pages -> Service -> Repository (infrastructure/db/index.ts) -> Database.
So changing Database does NOT break Pages.

## Step 1 - Run locally FREE
npm install
cp .env.example .env  (or create .env with DB_TYPE=memory)
npm run dev
Open http://localhost:3000

## Step 2 - Push to GitHub
git init
git add .
git commit -m 'KGF portal v1'
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kolargoldfields.git
git push -u origin main

## Step 3 - Deploy FREE on Cloudflare (No Domain Needed)
1. dash.cloudflare.com -> Pages -> Create -> Connect to Git -> pick repo
2. Build: npx @cloudflare/next-on-pages | Output: .vercel/output/static
3. Deploy -> You get https://kolargoldfields.pages.dev - LIVE, share it.

## Step 4 - Real DB D1 (Later, Still FREE)
npx wrangler login
npx wrangler d1 create kgf-db  # copy id to wrangler.toml
npx wrangler r2 bucket create kgf-images
Set in Cloudflare Pages Env: DB_TYPE=d1, STORAGE_TYPE=r2
Ask Copilot: Implement D1DriverRepository in d1.adapter.ts using Drizzle + D1, same interface. Do NOT change pages.

## Step 5 - Buy Domain Later
Buy kolargoldfields.in from Cloudflare Registrar (~Rs 800/yr).
Pages -> Custom Domains -> Add www.kolargoldfields.in
Change .env NEXT_PUBLIC_SITE_URL=https://www.kolargoldfields.in - No code change.

## Copilot Prompts
Add Jobs: Add Job type to interfaces.ts, seedJobs to seed.ts, service job.service.ts, page app/jobs/page.tsx. Do NOT write DB code in page.
Implement D1: Implement D1 adapter with Drizzle, same interface, do NOT change pages.

## Safety
NEVER publish Aadhaar / DL / RC number. NEVER publish personal mobile without permission. Leaders page neutral. Disclaimer: Not a government website.
Built for KGF - Robertsonpet, Andersonpet, Champion Reef, Oorgaum, Marikuppam, Bangarapet.