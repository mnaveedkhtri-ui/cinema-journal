'use client';

import { showToast } from '@/components/Toast';

export function SaveShareButtons() {
  return (
    <>
      <button onClick={() => showToast('Saved to your reading list.')} className="hover:text-white transition-colors">
        Save
      </button>
      <button onClick={() => showToast('Link copied.')} className="hover:text-white transition-colors">
        Share
      </button>
    </>
  );
}

export function TagButtons({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => showToast(`Browsing tag: ${t}`)}
          className="px-3 py-1.5 text-xs border border-white/15 text-white/70 hover:border-white/40 hover:text-white cursor-pointer transition-colors"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
