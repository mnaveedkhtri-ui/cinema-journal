'use client';

import { FormEvent } from 'react';
import { showToast } from './Toast';

export function NewsletterFormCompact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Thank you. We will write when we are ready.');
    e.currentTarget.reset();
  };

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input type="email" required placeholder="your@email" className="flex-1 min-w-0" aria-label="Email address" />
      <button
        className="bg-white text-black px-4 text-sm font-medium hover:bg-white/80 transition-colors flex items-center"
        aria-label="Subscribe"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}

export function NewsletterFormWide() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Thank you. We will write when we are ready.');
    e.currentTarget.reset();
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={onSubmit}>
      <input type="email" required placeholder="your@email" className="flex-1 min-w-0" aria-label="Email address" />
      <button className="btn-primary justify-center">Subscribe</button>
    </form>
  );
}
