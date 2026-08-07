'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scrollProgress');
    const nav = document.getElementById('globalNav');

    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      if (bar) bar.style.width = pct + '%';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" id="scrollProgress" />;
}
