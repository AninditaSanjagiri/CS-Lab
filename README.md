# CS✳LAB — Personal Engineering Lab

A responsive React/Vite learning platform with three connected spaces: the original nine CS disciplines, dedicated AI and Data Engineering roadmaps, and a project universe of playful mini-builds and serious engineering projects.

## What's included

- **CS Engineering:** the original nine disciplines, detailed modules and concepts, explanations, analogies, practical examples, code samples, mastery states and required project submissions.
- **AI Engineering Roadmap:** Python for AI, math and statistics, classical ML, deep learning, transformers, LLMs, RAG, fine-tuning, agents, guardrails and evaluation.
- **Data Engineering Roadmap:** SQL and modelling, data quality, ETL/ELT, orchestration, warehouses, lakes, Spark, Kafka, governance and observability.
- **Project Universe:** Wordle, The Marauder's Map, Camp Half-Blood Quest Planner, K-pop Fandom Intelligence, IPL Intelligence Engine, Hogwarts Knowledge Engine, Hunger Games Arena Simulator, Wizard's Apprentice Fine-tune, AI Gatekeeper and Personal AI Engineering Lab.
- **Concept mastery:** Not started, In progress, Needs practice and Mastered.
- **Project submissions:** validated HTTP(S) repository URLs, mapped disciplines, concepts and build milestones.
- **Persistence:** localStorage preview mode and optional Firebase Authentication + Cloud Firestore sync.
- **Navigation:** direct routes for every discipline, roadmap and project page, plus an editorial full-screen navigation menu.
- **Launch foundations:** route-specific document titles/descriptions, canonical tags, Open Graph metadata, structured WebSite data, robots.txt, sitemap.xml, privacy/terms pages, custom 404, reduced-motion support and Vercel Analytics opt-in.

## 1. Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Without Firebase environment variables, CS Lab runs in local-preview mode. Progress is stored in this browser's localStorage and does not sync to other devices. Use the download icon to export a JSON backup.

## 2. Firebase persistence

1. Create a Firebase project in the Firebase console.
2. Add a Web App and copy its config.
3. Enable Email/Password and Google under Authentication → Sign-in method.
4. Create a Cloud Firestore database.
5. Publish the rules in `firestore.rules`.
6. Add your local and Vercel domains under Authentication → Authorized domains.
7. Copy `.env.example` to `.env.local` and fill the `VITE_FIREBASE_*` values.
8. Restart the dev server.

### Firestore model

```text
users/{uid}/domains/{domainId}
  concepts: { conceptId: masteryStatus }
  projects: { projectId: repositoryUrl }
```

The same per-user document model is used for the nine CS disciplines, AI roadmap, Data Engineering roadmap and Project Universe submissions. Each authenticated user can read/write only their own `/users/{uid}` subtree. The application stores progress metadata and repository URLs, not uploaded source code or project files.

**Quota note:** this is a low-write workload: a concept change or repository submission writes one small document. Firestore Spark quotas still apply. Avoid adding frequent autosave keystroke writes; the app saves only when the user explicitly selects a mastery status or presses Save Link. Enable Firebase App Check before a public launch and monitor usage in the Firebase console.

## 3. Deploy to Vercel

1. Push this project folder to a GitHub repository.
2. Import it into Vercel with the Vite framework preset.
3. Add the Firebase environment variables in Vercel if cloud sync is wanted.
4. Set `VITE_SITE_URL` to the exact production URL, for example your custom domain or the production Vercel domain. This is used to replace the canonical and sitemap placeholders during the build.
5. Optionally set `VITE_ENABLE_ANALYTICS=true` after enabling Web Analytics in the Vercel project dashboard.
6. Deploy and add the deployed domain to Firebase Authentication's authorized domains.

The included `vercel.json` rewrites app routes to `index.html`. No separately deployed backend is required: the browser uses Firebase's client SDK and Firestore security rules. Do not put service-account credentials or private API keys in `VITE_*` variables. Anything prefixed with `VITE_` is exposed to the browser.

## 4. Search, privacy and trust checklist

- `npm run build` prepares canonical URLs and sitemap entries from `VITE_SITE_URL`.
- `public/robots.txt` and `public/sitemap.xml` are included. Verify the deployed sitemap URL in Google Search Console after launch.
- The React app updates title, description, canonical and Open Graph title/description on route changes. This is a client-rendered SPA; if server-rendered previews for non-JavaScript crawlers become important, add prerendering or SSR.
- `public/privacy.html` and `public/terms.html` are starter policies. Review and adapt them to the actual operator, jurisdiction, data processors and contact details before public launch. Add a real contact method; none has been invented here.
- No paid service, refund policy or advertising feature is present. Add a refund policy only if payments are introduced.
- Images in the current UI are primarily CSS and typography. If you add fandom imagery, use assets you own, have licensed, or are otherwise permitted to use.
- Vercel Analytics is opt-in. Enable it in Vercel and set `VITE_ENABLE_ANALYTICS=true`; update the privacy notice to match the actual analytics configuration and applicable consent requirements.
- Enable GitHub Dependabot/security alerts and keep dependencies updated.
- Test keyboard navigation, mobile layouts, reduced-motion settings, form errors and Firebase rules before public launch.

## 5. Progress and backups

When Firebase is configured and a user is signed in, progress syncs to that user's Firestore records. In local preview, it remains in localStorage on the current browser. Export progress regularly from the header. The app does not automatically verify that a submitted repository exists or inspect its contents.

## 6. Important content notes

Project themes such as Harry Potter, Percy Jackson, The Hunger Games, K-pop and IPL are used as learning inspiration. Their names and related intellectual property belong to their respective owners. Use synthetic data, public datasets, public-domain sources, licensed assets or content you have permission to process. Do not redistribute copyrighted book text, private fan content or scraped personal information.
