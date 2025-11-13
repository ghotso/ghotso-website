import { routing } from '@/i18n/routing';
import AboutContent from '@/components/about/AboutContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function AboutPage() {
  return <AboutContent />;
}

