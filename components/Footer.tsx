'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer className="bg-ghotso-panel border-t border-white/5 mt-auto">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-ghotso-text-muted">
            © {new Date().getFullYear()} ghotso. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/legal"
              className="text-sm text-ghotso-text-muted hover:text-ghotso-accent transition-colors"
            >
              {t('legal')}
            </Link>
            <a
              href="https://github.com/ghotso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ghotso-text-muted hover:text-ghotso-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

