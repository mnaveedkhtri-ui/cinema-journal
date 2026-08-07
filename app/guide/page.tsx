import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import NewsletterSection from '@/components/NewsletterSection';
import { chapters } from '@/data/guideChapters';

export const metadata: Metadata = {
  title: 'The Field Guide',
  description:
    'A working guide to the elements of cinema — ten short chapters on cinematography, film lighting, editing, and visual storytelling.',
};

export default function GuidePage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[1400px] mx-auto">
      <Reveal className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow">A working document</div>
          <div className="w-10 h-px bg-white/25" />
          <div className="eyebrow">10 chapters</div>
        </div>
        <h1 className="hero-title text-[13vw] md:text-[9vw] lg:text-[7rem] mb-8">
          The Field
          <br />
          <span className="italic font-extralight">Guide</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
          A working guide to the elements of cinema. Ten short chapters on cinematography, film
          lighting, editing, and visual storytelling. Not a textbook but a working notebook.
          Updated when we learn something new, which is less often than we would like.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal as="aside" className="lg:col-span-3">
          <div className="sticky top-32">
            <div className="eyebrow mb-5">Contents</div>
            <ul className="space-y-3 text-sm">
              {chapters.map((c, i) => (
                <li key={c.n}>
                  <a href={`#ch-${i}`} className="text-white/55 hover:text-white transition-colors flex gap-3 items-baseline">
                    <span className="text-white/30 font-mono text-xs w-7">{c.n}</span>
                    <span>{c.title.replace('On ', '')}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="divider mt-8 mb-6" />
            <div className="text-xs text-white/40 leading-relaxed">
              Last revised November 2025. Suggestions welcome, this is a living document.
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-9 space-y-14">
          {chapters.map((c, i) => (
            <Reveal as="article" key={c.n} id={`ch-${i}`} className="glass-card p-8 md:p-12">
              <div className="flex items-baseline gap-6 mb-6">
                <span className="chapter-num">{c.n}</span>
                <h2 className="font-display text-3xl md:text-4xl font-light">{c.title}</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6 max-w-3xl">{c.desc}</p>
              <p className="text-base text-white/65 leading-relaxed max-w-3xl">{c.body}</p>
              <div className="mt-8 flex items-center gap-3 text-xs text-white/40">
                <span>Updated {c.month} 2025</span>
                <span>·</span>
                <span>{c.read} min read</span>
                <span className="ml-auto arrow text-white/40">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <NewsletterSection />
    </section>
  );
}
