import Reveal from './Reveal';
import { NewsletterFormWide } from './NewsletterForm';

export default function NewsletterSection() {
  return (
    <Reveal as="section" className="px-6 lg:px-10 py-24 max-w-[1400px] mx-auto" id="newsletter">
      <div className="glass-panel p-12 md:p-16 text-center max-w-3xl mx-auto">
        <div className="eyebrow mb-5">Slow correspondence</div>
        <h2 className="font-display text-3xl md:text-4xl font-light mb-5 leading-tight">
          Letters from the cutting room
        </h2>
        <p className="text-white/55 mb-8 leading-relaxed max-w-xl mx-auto">
          An occasional letter about slow cinema and visual storytelling. Not a newsletter. We
          write when we have something to say, which is rarely more than once a month.
        </p>
        <NewsletterFormWide />
        <div className="text-xs text-white/35 mt-5">No tracking. No marketing. Unsubscribe with one click.</div>
      </div>
    </Reveal>
  );
}
