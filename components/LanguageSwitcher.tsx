'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathnameFromHook = usePathname();
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (pathnameFromHook) {
      setPathname(pathnameFromHook);
    }
  }, [pathnameFromHook]);

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={pathname}
        locale="en"
        className={`px-2 py-1 text-xs font-medium rounded transition-opacity ${
          locale === 'en'
            ? 'text-ghotso-accent opacity-100'
            : 'text-ghotso-text-muted opacity-60 hover:opacity-100'
        }`}
      >
        EN
      </Link>
      <span className="text-ghotso-text-muted opacity-30">|</span>
      <Link
        href={pathname}
        locale="de"
        className={`px-2 py-1 text-xs font-medium rounded transition-opacity ${
          locale === 'de'
            ? 'text-ghotso-accent opacity-100'
            : 'text-ghotso-text-muted opacity-60 hover:opacity-100'
        }`}
      >
        DE
      </Link>
    </div>
  );
}

