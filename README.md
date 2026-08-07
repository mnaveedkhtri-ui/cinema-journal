# The Long Take — Next.js site

Converted from the original static HTML into a proper Next.js 14 (App Router) project,
ready to push to GitHub and deploy on Vercel.

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

Open `data/blogPosts.ts` and add a new object to the `blogPosts` array, e.g.:

```ts
{
  slug: 'my-new-post-slug',
  tag: 'Craft',
  title: 'My new post title',
  date: 'Dec 01, 2025',
  read: '6 min',
  excerpt: 'A short one or two sentence summary.',
  content: `
    <p>Your first paragraph.</p>
    <p>Your second paragraph.</p>
  `,
},
```

The page `/blog/my-new-post-slug` is generated automatically — no other file needs to change.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy — GitHub + Vercel

### 1. Push to GitHub

```bash
cd cinema-blog
git init
git add .
git commit -m "Initial commit — The Long Take"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo first at https://github.com/new — don't initialize it with a README,
so the push above doesn't conflict.)

### 2. Deploy on Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository** and select the repo you just pushed.
3. Framework Preset: Vercel auto-detects **Next.js** — leave build settings as default
   (`next build`, output `.next`).
4. Click **Deploy**.

Every future push to `main` will auto-redeploy. Pushes to other branches get their own
preview URL.

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and follow the DNS
instructions Vercel gives you.
