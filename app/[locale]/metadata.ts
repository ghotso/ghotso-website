import { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return {
    title: isGerman
      ? 'ghotso - Entwickler Portfolio'
      : 'ghotso - Developer Portfolio',
    description: isGerman
      ? 'Tech-Enthusiast, autodidaktischer Entwickler & Automatisierungs-Fan. Portfolio mit Open-Source-Projekten und persönlichen Projekten.'
      : 'Tech enthusiast, self-taught developer & automation nerd. Portfolio showcasing open-source projects and personal work.',
    keywords: [
      'developer',
      'portfolio',
      'open source',
      'automation',
      'home server',
      'self-taught',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Node.js',
    ],
    authors: [{ name: 'Michael David Guggenbichler' }],
    creator: 'ghotso',
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://ghotso.dev',
      siteName: 'ghotso.dev',
      title: isGerman
        ? 'ghotso - Entwickler Portfolio'
        : 'ghotso - Developer Portfolio',
      description: isGerman
        ? 'Tech-Enthusiast, autodidaktischer Entwickler & Automatisierungs-Fan'
        : 'Tech enthusiast, self-taught developer & automation nerd',
    },
    twitter: {
      card: 'summary_large_image',
      title: isGerman
        ? 'ghotso - Entwickler Portfolio'
        : 'ghotso - Developer Portfolio',
      description: isGerman
        ? 'Tech-Enthusiast, autodidaktischer Entwickler & Automatisierungs-Fan'
        : 'Tech enthusiast, self-taught developer & automation nerd',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://ghotso.dev',
      languages: {
        en: 'https://ghotso.dev/en',
        de: 'https://ghotso.dev/de',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
      ],
      apple: [
        { url: '/favicon.png', type: 'image/png', sizes: '180x180' },
      ],
      shortcut: '/favicon.png',
    },
  };
}

