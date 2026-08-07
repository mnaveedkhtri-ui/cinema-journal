import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Imprint' };

export default function ImprintPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[860px] mx-auto">
      <Reveal className="mb-12">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="hero-title text-[10vw] md:text-[6vw] lg:text-[5rem] mb-8">Imprint</h1>
      </Reveal>
      <Reveal className="glass-panel p-8 md:p-12 article-body">
        <p>The Long Take is an independent journal of slow cinema and visual storytelling.</p>
        <p>
          Published by:
          <br />
          Iván Castellano
          <br />
          Rua das Janelas Verdes 12
          <br />
          1200-690 Lisboa, Portugal
        </p>
        <p>
          Contact:
          <br />
          Email:{' '}
          <a href="mailto:naveedkhatri7@gmail.com" className="text-white underline decoration-white/30 hover:decoration-white">
            naveedkhatri7@gmail.com
          </a>
        </p>
        <p>
          Represented by the editors responsible for the content. We are not a corporation. We
          are two people in two rooms in two cities.
        </p>
      </Reveal>
    </section>
  );
}
