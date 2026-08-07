import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import NewsletterSection from '@/components/NewsletterSection';
import { routes } from '@/data/routes';

export const metadata: Metadata = {
  title: 'Routes',
  description:
    'Cinematic travel guides and film location itineraries — slow travel essays following a film, a filmmaker, or a kind of light to a particular place.',
};

export default function RoutePage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[1400px] mx-auto">
      <Reveal className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow">Slow travel</div>
          <div className="w-10 h-px bg-white/25" />
          <div className="eyebrow">06 routes</div>
        </div>
        <h1 className="hero-title text-[13vw] md:text-[9vw] lg:text-[7rem] mb-8">Routes</h1>
        <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
          Cinematic travel guides and film location itineraries. Long form travel essays following
          a film, a filmmaker, or a kind of light to a particular place. Each route is a slow
          itinerary, measured in days, not destinations.
        </p>
      </Reveal>

      <div className="space-y-5">
        {routes.map((r) => (
          <Reveal as="article" key={r.n} className="article-link block glass-card p-8 md:p-10 relative">
            <Link href="/blog" className="absolute inset-0" aria-label={`${r.title} route`} />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center relative z-10">
              <div className="md:col-span-1">
                <div className="font-display text-5xl md:text-6xl font-extralight text-white/30">{r.n}</div>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-light mb-3 leading-tight">{r.title}</h3>
                <div className="text-sm text-white/50 font-mono">{r.places}</div>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-white/65 leading-relaxed">{r.desc}</p>
              </div>
              <div className="md:col-span-2 md:text-right text-xs text-white/50 space-y-1">
                <div className="font-mono">{r.days}</div>
                <div>{r.films}</div>
              </div>
              <div className="md:col-span-1 md:text-right">
                <span className="arrow text-white/50 text-xl">→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 glass-panel p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow mb-5">A note on method</div>
            <h2 className="font-display text-3xl md:text-4xl font-light mb-5 leading-tight">
              We do not publish a route until we have walked it.
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">
              Every route in this journal has been traveled, in full, by at least one of the
              editors. We do not accept press trips. We do not link to affiliates. We pay our own
              way, and we write only about what we have seen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/12 p-6">
              <div className="text-3xl font-display font-extralight mb-1">51</div>
              <div className="text-xs text-white/50 leading-relaxed">Days on the road this year</div>
            </div>
            <div className="border border-white/12 p-6">
              <div className="text-3xl font-display font-extralight mb-1">12</div>
              <div className="text-xs text-white/50 leading-relaxed">Countries visited since 2021</div>
            </div>
            <div className="border border-white/12 p-6">
              <div className="text-3xl font-display font-extralight mb-1">0</div>
              <div className="text-xs text-white/50 leading-relaxed">Press trips accepted</div>
            </div>
            <div className="border border-white/12 p-6">
              <div className="text-3xl font-display font-extralight mb-1">35</div>
              <div className="text-xs text-white/50 leading-relaxed">Films rewatched on the road</div>
            </div>
          </div>
        </div>
      </Reveal>

      <NewsletterSection />
    </section>
  );
}
