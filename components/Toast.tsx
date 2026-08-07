'use client';

import { useEffect, useRef, useState } from 'react';

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent('app:toast', { detail: message }));
}

export default function Toast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail);
      setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 1800);
    };
    window.addEventListener('app:toast', handler);
    return () => window.removeEventListener('app:toast', handler);
  }, []);

  return (
    <div
      className="toast glass-panel px-5 py-3 text-sm"
      style={{ opacity: visible ? 1 : 0 }}
      role="alert"
    >
      {message}
    </div>
  );
}
