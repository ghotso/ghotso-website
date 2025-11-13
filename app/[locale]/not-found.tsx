'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('common');
  
  return (
    <div className="min-h-screen flex items-center justify-center py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-ghotso-primary">404</h1>
        <p className="text-xl text-ghotso-text-muted mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-ghotso-primary text-ghotso-bg font-semibold rounded-xl hover:shadow-glow-primary hover:scale-105 transition-all duration-200"
        >
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
}

