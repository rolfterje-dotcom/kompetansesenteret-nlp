# Kompetansesenteret for NLP

Warm, trust-focused educational website built with **React + Vite + Tailwind** and **Sanity Studio** as CMS.

## Structure

```
Kompetansesenteret/
├── web/      # React frontend (Vite + TS + Tailwind)
└── studio/   # Sanity Studio (schemas + CMS)
```

## Design

Warm palette — cream, clay (warm terracotta), sage green — with Fraunces serif for headlines and Inter for body. Rounded forms, soft shadows, gentle gradients. Built to feel trustworthy and human for prospective students.

## Getting started

```bash
# install all workspaces
npm install

# run React frontend
npm run dev

# run Sanity Studio (separate terminal)
npm run studio
```

### Environment

`web/.env` (copy from `.env.example`):
```
VITE_SANITY_PROJECT_ID=xxx
VITE_SANITY_DATASET=production
```

`studio/.env`:
```
SANITY_STUDIO_PROJECT_ID=xxx
SANITY_STUDIO_DATASET=production
```

Initialize your Sanity project with `npx sanity@latest init` inside `studio/` if you need to create a new dataset.

## Pages

- `/` Home — hero, programs, courses, services, testimonials, CTA
- `/om-nlp` What is NLP
- `/tjenester` Services
- `/utdanning` Education programs
- `/kurs` Courses
- `/team` Team
- `/kontakt` Contact form

## Sanity schemas

`siteSettings`, `page`, `educationProgram`, `course`, `service`, `teamMember`, `testimonial`, `clientLogo`

The frontend currently uses placeholder content. To wire a page to Sanity, import `sanity` from `src/lib/sanity.ts` and query via GROQ, e.g.:

```ts
const programs = await sanity.fetch(`*[_type == "educationProgram"] | order(order asc)`);
```
