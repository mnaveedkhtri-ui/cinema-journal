import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Colophon' };

export default function ColophonPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[860px] mx-auto">
      <Reveal className="mb-12">
        <div className="eyebrow mb-6">Technical</div>
        <h1 className="hero-title text-[10vw] md:text-[6vw] lg:text-[5rem] mb-8">Colophon</h1>
      </Reveal>
      <Reveal className="glass-panel p-8 md:p-12 article-body">
        <p>
          This journal is built with Next.js and deployed on Vercel. It is not a WordPress site,
          it is not a Substack, it is not a Ghost instance. It is a set of React components,
          written and maintained by the editors.
        </p>
        <p>The typography is set in <em>Fraunces</em> for display and <em>Manrope</em> for interface text. Both are open source.</p>
        <p>
          The visual atmosphere is composed of a single looping video background, layered with a
          subtle atmospheric overlay, a bottom blur, a moving film grain, and a gentle vignette.
          We chose this architecture because we wanted the journal to feel like a continuous
          space, not a collection of separate pages.
        </p>
        <p>
          If you notice something broken, or if you want to suggest an improvement, you can write
          to us at{' '}
          <a href="mailto:naveedkhatri7@gmail.com" className="text-white underline decoration-white/30 hover:decoration-white">
            naveedkhatri7@gmail.com
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
