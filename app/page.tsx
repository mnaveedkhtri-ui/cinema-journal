import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ArticleCard from '@/components/ArticleCard';
import { blogPosts } from '@/data/blogPosts';

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);
  const notebook = ['On duration', 'On light', 'On the cut', 'On the frame', 'On sound'];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-36 pb-20 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <div className="eyebrow">Volume 03, Issue 14</div>
          <div className="w-10 h-px bg-white/25" />
          <div className="eyebrow">Winter Light</div>
        </div>

        <h1 className="hero-title text-[15vw] md:text-[11vw] lg:text-[9.5rem] mb-10">
          The Long
          <br />
          <span className="italic font-extralight text-white/90">Take</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light">
          A slow cinema journal publishing cinematic essays, film location diaries, and notes on
          visual storytelling. We publish dispatches from the cutting room, the location scout,
          and the quiet hour after the wrap.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="btn-primary">
            Read Blog <span className="arrow">→</span>
          </Link>
          <Link href="/guide" className="btn-ghost">
            The Field Guide
          </Link>
        </div>
      </Reveal>

      <Reveal className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border-t border-white/15 pt-6">
          <div className="text-5xl font-display font-extralight mb-2">{blogPosts.length}</div>
          <div className="text-sm text-white/50 leading-relaxed">Cinematic essays published, each one slow.</div>
        </div>
        <div className="border-t border-white/15 pt-6">
          <div className="text-5xl font-display font-extralight mb-2">09</div>
          <div className="text-sm text-white/50 leading-relaxed">Volumes, each a season of light.</div>
        </div>
        <div className="border-t border-white/15 pt-6">
          <div className="text-5xl font-display font-extralight mb-2">∞</div>
          <div className="text-sm text-white/50 leading-relaxed">Frames still being considered.</div>
        </div>
      </Reveal>

      <Reveal className="mt-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow mb-3">Currently on the reel</div>
            <h2 className="font-display text-4xl md:text-5xl font-light">Latest dispatches</h2>
          </div>
          <Link href="/blog" className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors">
            All dispatches <span className="arrow">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-32 glass-panel p-10 md:p-16">
        <div className="eyebrow mb-5">Manifesto, No. 01</div>
        <p className="font-display text-2xl md:text-4xl font-light leading-snug">
          We believe the long take is not a technique. It is an ethic, a refusal to cut away from
          what you have not yet finished seeing. This journal is built in that spirit: slow,
          attentive, and unwilling to look away.
        </p>
        <div className="mt-8 text-sm text-white/50">The Editors, Porto and Reykjavík</div>
      </Reveal>

      <Reveal className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-5">From the Field Guide</div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight">
              A working notebook on the elements of cinema
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Ten short chapters on duration, light, the cut, the frame, sound, the room, the
              face, silence, weather, and ending. Not a textbook but a living document, updated
              when we learn something new.
            </p>
            <Link href="/guide" className="btn-ghost">
              Open the guide <span className="arrow">→</span>
            </Link>
          </div>
          <div className="glass-card p-8">
            <div className="space-y-5">
              {notebook.map((t, i) => (
                <div key={t} className={`flex items-baseline gap-5 pb-4 ${i < 4 ? 'border-b border-white/10' : ''}`}>
                  <span className="font-mono text-xs text-white/40 w-8">0{i + 1}</span>
                  <span className="font-display text-lg font-light flex-1">{t}</span>
                  <span className="arrow text-white/40">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
