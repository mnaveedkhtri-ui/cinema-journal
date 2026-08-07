'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/guide', label: 'Field Guide' },
  { href: '/route', label: 'Routes' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/blog') return pathname === '/blog' || pathname.startsWith('/blog/');
    return pathname === href;
  };

  return (
    <nav className="global-nav" id="globalNav" aria-label="Main navigation">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="The Long Take Home">
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <div className="absolute inset-[-3px] border border-white/0 group-hover:border-white/30 transition-colors duration-500" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base tracking-tight">The Long Take</div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mt-0.5 hidden sm:block">
              A Cinematic Journal
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${isActive(l.href) ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-white/50 tracking-wider">
            <span className="live-dot" />
            <span>NOW PLAYING</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
