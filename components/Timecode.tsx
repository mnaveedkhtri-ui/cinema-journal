'use client';

import { useEffect, useState } from 'react';

function formatTimecode() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const f = String(Math.floor((now.getMilliseconds() / 1000) * 24)).padStart(2, '0');
  return `${h}:${m}:${s}:${f}`;
}

export default function Timecode() {
  const [time, setTime] = useState('00:00:00:00');

  useEffect(() => {
    const id = setInterval(() => setTime(formatTimecode()), 1000 / 12);
    setTime(formatTimecode());
    return () => clearInterval(id);
  }, []);

  return (
    <div className="timecode" aria-hidden="true">
      <span className="timecode-dot" />
      <span>{time}</span>
    </div>
  );
}
