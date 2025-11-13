import { routing } from '@/i18n/routing';
import LegalContent from '@/components/legal/LegalContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LegalPage() {
  return <LegalContent />;
}

