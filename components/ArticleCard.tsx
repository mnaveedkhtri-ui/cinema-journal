import Link from 'next/link';
import Reveal from './Reveal';
import { BlogPost } from '@/data/blogPosts';

export default function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Reveal as="article" className="article-link glass-card p-7 block h-full flex flex-col relative group">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={post.title} />
      {post.image && (
        <div className="w-full h-48 -mt-2 mb-6 overflow-hidden rounded-md border border-white/10 relative z-10 bg-black/40">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <span className="eyebrow text-white/70">{post.tag}</span>
        <span className="text-xs text-white/40 font-mono">{post.date}</span>
      </div>
      <h3 className="font-display text-2xl font-light leading-tight mb-4 text-white group-hover:text-amber-200/90 transition-colors">{post.title}</h3>
      <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-white/45 pt-4 border-t border-white/8 relative z-10">
        <span>{post.read} read</span>
        <span className="arrow">→</span>
      </div>
    </Reveal>
  );
}
