import type { Metadata } from 'next';
import './globals.css';
import CinematicBackground from '@/components/CinematicBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timecode from '@/components/Timecode';
import Toast from '@/components/Toast';

const baseUrl = 'https://cinema-journal.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
  verification: {
    google: 'wYFUIXoVNRkPCSeAExJZhbNGbE9pcbuFswY8d8GCIdw',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    title: 'The Long Take | Slow Cinema Journal & Film Essays',
    description:
      'Explore the art of slow cinema at The Long Take. Read cinematic essays, film location guides, and visual storytelling notes from independent editors.',
    url: `${baseUrl}/`,
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
              url: `${baseUrl}/`,
              description:
                'A slow cinema journal publishing cinematic essays, film location guides, and visual storytelling notes.',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${baseUrl}/search?q={search_term_string}`,
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
