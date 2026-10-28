'use client';

import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop links */}
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

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 text-white/70 hover:text-white border border-white/15 rounded bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080808]/95 backdrop-blur-2xl px-6 py-5 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm py-1.5 transition-colors ${
                isActive(l.href) ? 'text-white font-medium pl-2 border-l border-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
