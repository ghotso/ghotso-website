'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathnameFromHook = usePathname();
  const [pathname, setPathname] = useState('/');
  const locale = useLocale();

  useEffect(() => {
    if (pathnameFromHook !== undefined && pathnameFromHook !== null) {
      setPathname(pathnameFromHook);
    }
  }, [pathnameFromHook]);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
    { href: '/legal', label: t('legal') },
  ];

  const isActive = (href: string) => {
    // usePathname() from next-intl returns pathname without locale prefix
    if (href === '/') {
      return pathname === '/' || pathname === '';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-ghotso-panel/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="group flex items-center space-x-2 text-xl font-bold text-ghotso-primary hover:text-ghotso-primary/80 transition-all duration-200 hover:scale-105"
          >
            <span className="text-2xl tracking-tight relative">
              ghotso
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ghotso-accent group-hover:w-full transition-all duration-300" />
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-ghotso-primary bg-ghotso-bg-secondary/50'
                    : 'text-ghotso-text-muted hover:text-ghotso-text hover:bg-ghotso-bg-secondary/30'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-ghotso-primary rounded-full shadow-glow-primary" />
                    <span className="absolute inset-0 rounded-lg bg-ghotso-primary/5" />
                  </>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-white/10 bg-ghotso-panel/98">
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-ghotso-primary bg-ghotso-bg-secondary shadow-glow-primary/20'
                  : 'text-ghotso-text-muted hover:text-ghotso-text hover:bg-ghotso-bg-secondary/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

