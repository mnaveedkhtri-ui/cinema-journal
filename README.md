# The Long Take — Slow Cinema Journal & Film Essays

An independent slow cinema journal and collection of film essays, exploring the contemplative gaze, cinematic duration, and visual storytelling.

Built with **Next.js 14 (App Router)**, Tailwind CSS, and structured JSON-LD SEO schemas.

## 🎬 Live Production & Editorial Dispatches

- **Official Publication:** [The Long Take Journal](https://cinema-journal.vercel.app/)
- **Master Guide:** [What is Slow Cinema? Definition, Aesthetics, and Essential Directors](https://cinema-journal.vercel.app/blog/what-is-slow-cinema)
- **Cinematic Theory:** [Sculpting in Time: Andrei Tarkovsky’s Philosophy of Duration](https://cinema-journal.vercel.app/blog/andrei-tarkovsky-sculpting-in-time)
- **Film Notebook:** [Best Slow Burn Movies and Why We Keep Returning](https://cinema-journal.vercel.app/blog/the-best-slow-burn-movies-and-why-we-return-to-them)
- **Critical Craft:** [Film Essays: What They Are and Why They Matter](https://cinema-journal.vercel.app/blog/film-essays)
- **Visual Technique:** [The Long Take: Inside Cinema's Most Celebrated Continuous Shots](https://cinema-journal.vercel.app/blog/the-long-take)

---

## Structure

```
cinema-blog/
├── app/
│   ├── layout.tsx          Global background + navbar + footer
│   ├── globals.css         All site styling (Tailwind + custom CSS)
│   ├── page.tsx            Home page
│   ├── blog/
│   │   ├── page.tsx        Blog list page
│   │   └── [slug]/
│   │       ├── page.tsx    Individual blog post (auto-generated per slug)
│   │       └── interactive.tsx
│   ├── guide/page.tsx      Field Guide
│   ├── about/page.tsx      About
│   ├── route/page.tsx      Routes
│   ├── imprint/page.tsx
│   ├── privacy/page.tsx
│   ├── colophon/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── CinematicBackground.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── Reveal.tsx           (scroll-reveal animation wrapper)
│   ├── ScrollProgress.tsx
│   ├── Timecode.tsx
│   ├── Toast.tsx
│   ├── NewsletterForm.tsx
│   └── NewsletterSection.tsx
├── data/
│   ├── blogPosts.ts          ← ADD YOUR NEW BLOG POSTS HERE
│   ├── guideChapters.ts
│   └── routes.ts
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Adding a new blog post

Open `data/blogPosts.ts` and add a new object to the `blogPosts` array.

## Sitemap & SEO

- Auto-generating dynamic XML sitemap at `/sitemap.xml`.
- Structured Data: `@type: WebSite`, `@type: Article`, and `@type: FAQPage` JSON-LD schemas embedded for Google Rich Snippets & AI Overviews.
