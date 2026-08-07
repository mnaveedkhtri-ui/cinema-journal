import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSection from '@/components/NewsletterSection';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the latest film essays and cinema blog posts at The Long Take. Dive deep into slow cinema, cinematography notes, and visual storytelling analysis.',
};

export default function BlogPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[1400px] mx-auto">
      <Reveal className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow">Volume 03</div>
          <div className="w-10 h-px bg-white/25" />
          <div className="eyebrow">Dispatches</div>
        </div>
        <h1 className="hero-title text-[13vw] md:text-[9vw] lg:text-[7rem] mb-8">The Blog</h1>
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
          Film dispatches, movie analysis, and cinematography notes. Field reports, location
          diaries, craft notes, and slow essays. Published when ready, not when scheduled.
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap items-center gap-2 mb-12">
        <div className="ml-auto text-xs text-white/40 font-mono">{blogPosts.length} entries</div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>

      <NewsletterSection />
    </section>
  );
}
