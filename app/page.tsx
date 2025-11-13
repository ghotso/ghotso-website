import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  // Redirect to default locale explicitly
  redirect(`/${routing.defaultLocale}`);
}

