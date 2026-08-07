'use client';

import { showToast } from '@/components/Toast';

export function SubmitButton() {
  return (
    <button onClick={() => showToast('Submissions are closed until spring.')} className="btn-ghost">
      Submit a dispatch
    </button>
  );
}
