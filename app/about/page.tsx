import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import NewsletterSection from '@/components/NewsletterSection';
import { SubmitButton } from './interactive';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The Long Take is an independent slow cinema journal edited by two people who used to work in film and now prefer to write about it.',
};

const history = [
  { y: '2021', l: 'Volume 01', d: 'Founded in a hotel room in Porto, on a long layover, with nothing to read. The first dispatch was 400 words about the curtains.' },
  { y: '2022', l: 'Volume 02', d: 'Added the Field Guide. Marta joined as editor. We moved the journal to its current irregular schedule.' },
  { y: '2023', l: 'Volume 03', d: 'Added Routes. First print edition, in a run of 300, sold at a single bookshop in Lisbon.' },
  { y: '2025', l: 'Now', d: 'You are here. The journal continues. We are still figuring out what it is.' },
];

export default function AboutPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[1400px] mx-auto">
      <Reveal className="mb-24">
        <div className="eyebrow mb-6">Colophon</div>
        <h1 className="hero-title text-[13vw] md:text-[9vw] lg:text-[7rem] mb-10">
          About
          <br />
          <span className="italic font-extralight">the journal</span>
        </h1>
        <p className="text-xl text-white/65 max-w-3xl leading-relaxed font-light">
          The Long Take is an independent slow cinema journal publishing cinematic essays, movie
          analysis, and visual storytelling notes. It is edited by two people who used to work in
          film and now prefer to write about it.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <Reveal>
          <div className="eyebrow mb-6">What we publish</div>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              The journal runs on three streams. <em className="text-white not-italic font-medium">Dispatches</em> are short field
              reports, a location visited, a film rewatched, a craft observation recorded. They
              appear when they are ready, which is roughly weekly.
            </p>
            <p>
              <em className="text-white not-italic font-medium">The Field Guide</em> is a longer working document on the elements
              of cinema. It is never finished. It is updated when we learn something, which is
              less often than we would like.
            </p>
            <p>
              <em className="text-white not-italic font-medium">Routes</em> are slow travel essays, following a film, a
              filmmaker, or a kind of light to a particular place. They take months. They are the
              part of the journal we are most proud of.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="eyebrow mb-6">What we believe</div>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              We believe that the long take is not a technique but an ethic, a refusal to cut
              away from what you have not yet finished seeing.
            </p>
            <p>We believe that cinema is, finally, a way of paying attention, and that attention is the only thing that cannot be faked.</p>
            <p>We believe that films are best watched alone, in the morning, without a phone, and that everything else is a compromise.</p>
            <p>We believe that the room you watch a film in is part of the film.</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mb-24">
        <div className="eyebrow mb-8">The editors</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 mb-5 flex items-center justify-center font-display text-lg">
              IC
            </div>
            <h3 className="font-display text-2xl font-light mb-1">Iván Castellano</h3>
            <div className="text-xs text-white/50 mb-4 tracking-wider">CONTRIBUTING EDITOR, LISBON</div>
            <p className="text-sm text-white/65 leading-relaxed">
              Former focus puller. Lives in Lisbon. Watches one film a day, in the morning, before
              anything else. Writes the dispatches and the location diaries.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 mb-5 flex items-center justify-center font-display text-lg">
              ME
            </div>
            <h3 className="font-display text-2xl font-light mb-1">Marta Ehrenreich</h3>
            <div className="text-xs text-white/50 mb-4 tracking-wider">EDITOR IN CHIEF, REYKJAVÍK</div>
            <p className="text-sm text-white/65 leading-relaxed">
              Former colorist. Lives in Reykjavík. Believes the long blue hour is the only honest
              light. Edits everything, writes the routes, keeps the field guide alive.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mb-24">
        <div className="eyebrow mb-8">A short history</div>
        <div>
          {history.map((t) => (
            <div key={t.y} className="grid grid-cols-12 gap-6 py-6 border-t border-white/12">
              <div className="col-span-3 md:col-span-1 font-display text-2xl font-light">{t.y}</div>
              <div className="col-span-9 md:col-span-3 text-sm text-white/55 pt-2 tracking-wider">{t.l}</div>
              <div className="col-span-12 md:col-span-8 text-white/70 leading-relaxed pt-1">{t.d}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="glass-panel p-10 md:p-16">
        <div className="eyebrow mb-5">Contact</div>
        <p className="font-display text-2xl md:text-3xl font-light leading-snug mb-8">
          We read every letter. We do not always reply. We never reply quickly.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-ghost">Get in touch</Link>
          <SubmitButton />
        </div>
      </Reveal>

      <NewsletterSection />
    </section>
  );
}
