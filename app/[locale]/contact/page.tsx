import { routing } from '@/i18n/routing';
import ContactContent from '@/components/contact/ContactContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function ContactPage() {
  return <ContactContent />;
}

