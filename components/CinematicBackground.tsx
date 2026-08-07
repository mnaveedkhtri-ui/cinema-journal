'use client';

import { useEffect, useRef } from 'react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';

export default function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ensurePlayback = () => {
      const v = videoRef.current;
      if (v && v.paused) v.play().catch(() => {});
    };
    document.addEventListener('click', ensurePlayback, { once: true });
    document.addEventListener('touchstart', ensurePlayback, { once: true });
    window.addEventListener('load', ensurePlayback);
    ensurePlayback();
    return () => {
      document.removeEventListener('click', ensurePlayback);
      document.removeEventListener('touchstart', ensurePlayback);
      window.removeEventListener('load', ensurePlayback);
    };
  }, []);

  return (
    <div className="cinematic-bg" aria-hidden="true">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="layer-atmospheric" />
      <div className="layer-bottom-blur" />
      <div className="layer-vignette" />
      <div className="layer-grain" />
    </div>
  );
}
