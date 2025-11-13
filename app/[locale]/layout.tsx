import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import '../globals.css';
import { generateMetadata } from './metadata';

export { generateMetadata };

export const dynamicParams = false;
export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the specific locale - for static export, we load directly
  const messages = await import(`@/i18n/messages/${locale}.json`).then(
    (mod) => mod.default
  );

  return (
    <html lang={locale} className="scroll-smooth">
      <body>
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="Europe/Vienna">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

