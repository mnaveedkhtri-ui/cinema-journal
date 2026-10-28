import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSection from '@/components/NewsletterSection';
import { blogPosts } from '@/data/blogPosts';
import { SaveShareButtons, TagButtons } from './interactive';

const TAGS = ['Location', 'Tarkovsky', 'Marker', 'Wenders', 'Duration', 'Light', 'Architecture', 'Slow Cinema', 'Theory'];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  
  const url = `https://cinema-journal.vercel.app/blog/${params.slug}`;
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: 'article',
      images: post.image ? [{ url: post.image, width: 1600, height: 900, alt: post.imageAlt || post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

function extractFaqs(content: string) {
  const faqRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gi;
  const faqs: { question: string; answer: string }[] = [];
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    const a = match[2].replace(/<[^>]+>/g, '').trim();
    if (q && a) {
      faqs.push({ question: q, answer: a });
    }
  }
  return faqs;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const faqs = extractFaqs(post.content);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://cinema-journal.vercel.app/icon.png',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Iván Castellano',
      jobTitle: 'Contributing Editor',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Long Take',
      url: 'https://cinema-journal.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cinema-journal.vercel.app/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cinema-journal.vercel.app/blog/${post.slug}`,
    },
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const headerInner = (
    <>
      <Link href="/blog" className="text-sm text-white/50 hover:text-white flex items-center gap-2 mb-6 transition-colors">
        <span className="arrow rotate-180">→</span> Back to blog
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <span className="eyebrow text-white/70">{post.tag}</span>
        <div className="w-8 h-px bg-white/20" />
        <span className="text-xs text-white/40 font-mono">
          {post.date}, {post.read} read
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 tracking-tight text-white drop-shadow-sm">
        {post.title}
      </h1>

      <p className="text-base md:text-lg text-white/70 leading-relaxed font-light mb-8 max-w-2xl">{post.excerpt}</p>

      <div className="flex items-center justify-between border-y border-white/12 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black/70 border border-white/25 flex items-center justify-center font-display text-sm backdrop-blur-sm">
            IC
          </div>
          <div>
            <div className="text-sm">Iván Castellano</div>
            <div className="text-xs text-white/50">Contributing Editor, Lisbon</div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <SaveShareButtons />
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Structured SEO Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {post.image ? (
        <div className="article-hero relative w-full min-h-[520px] pt-36 pb-16 flex items-end">
          <img src={post.image} alt={post.imageAlt || post.title} />
          <div className="relative z-10 w-full px-6 lg:px-10 max-w-[860px] mx-auto">
            <Reveal>{headerInner}</Reveal>
          </div>
        </div>
      ) : null}

      <article className={`px-6 lg:px-10 ${post.image ? 'pt-12' : 'pt-36'} pb-20 max-w-[860px] mx-auto`}>
        {!post.image && <Reveal className="mb-12">{headerInner}</Reveal>}

        <Reveal className="glass-panel p-8 md:p-12 mb-12">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Reveal>

        <Reveal className="pt-10 border-t border-white/12">
          <div className="eyebrow mb-6">Filed under</div>
          <TagButtons tags={TAGS} />
        </Reveal>
      </article>

      <section className="px-6 lg:px-10 py-20 max-w-[1400px] mx-auto" aria-label="Related stories">
        <Reveal className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-light">Related stories</h2>
          <Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
            All dispatches <span className="arrow">→</span>
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
