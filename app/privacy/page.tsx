import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <section className="px-6 lg:px-10 pt-40 pb-20 max-w-[860px] mx-auto">
      <Reveal className="mb-12">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="hero-title text-[10vw] md:text-[6vw] lg:text-[5rem] mb-8">Privacy</h1>
      </Reveal>
      <Reveal className="glass-panel p-8 md:p-12 article-body">
        <p>We do not track you. We do not sell your data. We do not run advertising scripts on this journal.</p>
        <p>
          If you subscribe to our slow correspondence, we keep your email address in a secure
          list and use it only to send you our occasional letters. We will never share or sell
          that list. You can unsubscribe at any time by replying to any letter we send.
        </p>
        <p>
          This website uses local storage only for the purpose of remembering your reading
          preferences. It does not place tracking cookies. If you prefer absolute anonymity, you
          are welcome here.
        </p>
      </Reveal>
    </section>
  );
}
