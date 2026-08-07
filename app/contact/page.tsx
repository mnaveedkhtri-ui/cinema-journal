import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { NewsletterFormWide } from '@/components/NewsletterForm';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[860px] mx-auto">
      <Reveal className="mb-12">
        <div className="eyebrow mb-6">Get in touch</div>
        <h1 className="hero-title text-[13vw] md:text-[9vw] lg:text-[7rem] mb-8">Contact</h1>
        <p className="text-xl text-white/65 max-w-3xl leading-relaxed font-light">
          We read every letter. We do not always reply. We never reply quickly. If you have a
          dispatch to submit, a correction to make, or just want to share a film you love, write
          to us.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="glass-card p-8">
          <div className="eyebrow mb-4">Email</div>
          <a
            href="mailto:naveedkhatri7@gmail.com"
            className="text-lg font-display text-white border-b border-white/20 hover:border-white transition-colors pb-1 inline-block"
          >
            naveedkhatri7@gmail.com
          </a>
          <p className="text-sm text-white/50 mt-4">For submissions, corrections, and general correspondence.</p>
        </div>
        <div className="glass-card p-8">
          <div className="eyebrow mb-4">Social</div>
          <div className="flex gap-4 mt-2">
            <a
              href="/colophon"
              className="w-11 h-11 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
              aria-label="RSS Feed"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </a>
            <a
              href="mailto:naveedkhatri7@gmail.com"
              className="w-11 h-11 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-white/50 mt-4">We are not on other platforms. This is where we live.</p>
        </div>
      </Reveal>

      <Reveal className="glass-panel p-10 md:p-14 text-center">
        <div className="eyebrow mb-5">Slow correspondence</div>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-5 leading-tight">Letters from the cutting room</h2>
        <p className="text-white/55 mb-8 leading-relaxed max-w-xl mx-auto">
          An occasional letter about slow cinema. Not a newsletter. We write when we have
          something to say.
        </p>
        <NewsletterFormWide />
      </Reveal>
    </section>
  );
}
