import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSection from '@/components/NewsletterSection';
import { blogPosts } from '@/data/blogPosts';
import { SaveShareButtons, TagButtons } from './interactive';

const TAGS = ['Location', 'Tarkovsky', 'Marker', 'Wenders', 'Duration', 'Light', 'Architecture'];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="px-6 lg:px-10 pt-40 pb-20 max-w-[860px] mx-auto">
        <Reveal className="mb-12">
          <Link href="/blog" className="text-sm text-white/50 hover:text-white flex items-center gap-2 mb-10 transition-colors">
            <span className="arrow rotate-180">→</span> Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow text-white/70">{post.tag}</span>
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs text-white/40 font-mono">
              {post.date}, {post.read} read
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.02] mb-8 tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl text-white/65 leading-relaxed font-light mb-10">{post.excerpt}</p>

          <div className="flex items-center justify-between border-y border-white/12 py-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center font-display text-sm">
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
        </Reveal>

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

