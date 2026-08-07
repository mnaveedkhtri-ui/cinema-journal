import Link from 'next/link';
import { NewsletterFormCompact } from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <span className="font-display text-lg">The Long Take</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-md mb-8">
              A slow cinema journal publishing cinematic essays, film location diaries, and notes
              on visual storytelling. We write from somewhere quiet, irregularly, by two former
              film workers.
            </p>
            <div className="flex gap-3">
              <Link
                href="/colophon"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                aria-label="RSS Feed"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </Link>
              <a
                href="mailto:naveedkhatri7@gmail.com"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-colors"
                aria-label="Contact Page"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Reading</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-white/65 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/guide" className="text-white/65 hover:text-white transition-colors">Field Guide</Link></li>
              <li><Link href="/route" className="text-white/65 hover:text-white transition-colors">Routes</Link></li>
              <li><Link href="/about" className="text-white/65 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Archive</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-white/65 hover:text-white transition-colors">Volume 01, 2021</Link></li>
              <li><Link href="/blog" className="text-white/65 hover:text-white transition-colors">Volume 02, 2023</Link></li>
              <li><Link href="/blog" className="text-white/65 hover:text-white transition-colors">Volume 03, 2025</Link></li>
              <li><Link href="/blog" className="text-white/65 hover:text-white transition-colors">All volumes</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Slow correspondence</div>
            <p className="text-white/55 text-sm mb-4 leading-relaxed">
              An occasional letter. Not a newsletter. We write when we have something to say.
            </p>
            <NewsletterFormCompact />
          </div>
        </div>

        <div className="divider mt-14 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
          <div>© 2025 The Long Take. All frames reserved.</div>
          <div className="flex gap-6">
            <Link href="/imprint" className="hover:text-white/70 transition-colors">Imprint</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/colophon" className="hover:text-white/70 transition-colors">Colophon</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
