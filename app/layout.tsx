import type { Metadata } from 'next';
import './globals.css';
import CinematicBackground from '@/components/CinematicBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timecode from '@/components/Timecode';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  metadataBase: new URL('https://thelongtake.journal'),
  title: {
    default: 'The Long Take | Slow Cinema Journal & Film Essays',
    template: '%s | The Long Take',
  },
  description:
    'Explore the art of slow cinema at The Long Take. Read cinematic essays, film location guides, and visual storytelling notes from independent editors.',
  keywords: [
    'slow cinema',
    'film essays',
    'cinematic journal',
    'visual storytelling',
    'movie analysis',
    'film locations',
    'long take',
    'cinematography',
  ],
  authors: [{ name: 'The Long Take' }],
  openGraph: {
    type: 'website',
    title: 'The Long Take | Slow Cinema Journal & Film Essays',
    description:
      'Explore the art of slow cinema at The Long Take. Read cinematic essays, film location guides, and visual storytelling notes from independent editors.',
    url: 'https://thelongtake.journal/',
    siteName: 'The Long Take',
    images: ['https://picsum.photos/seed/hotel-room-tarkovsky/1200/630.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Long Take | Slow Cinema Journal & Film Essays',
    description:
      'Explore the art of slow cinema at The Long Take. Read cinematic essays, film location guides, and visual storytelling notes from independent editors.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'The Long Take',
              url: 'https://thelongtake.journal/',
              description:
                'A slow cinema journal publishing cinematic essays, film location guides, and visual storytelling notes.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://thelongtake.journal/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <CinematicBackground />
        <ScrollProgress />
        <Navbar />
        <main id="page-content">{children}</main>
        <Footer />
        <Timecode />
        <Toast />
      </body>
    </html>
  );
}
