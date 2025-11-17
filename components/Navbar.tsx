'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathnameFromHook = usePathname();
  const [pathname, setPathname] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    if (pathnameFromHook !== undefined && pathnameFromHook !== null) {
      setPathname(pathnameFromHook);
    }
  }, [pathnameFromHook]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-ghotso-primary bg-ghotso-bg-secondary/50'
                      : 'text-ghotso-text-muted hover:text-ghotso-text hover:bg-ghotso-bg-secondary/30'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-ghotso-primary rounded-full shadow-glow-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-ghotso-primary/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive(item.href) ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ghotso-text-muted hover:text-ghotso-text hover:bg-ghotso-bg-secondary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ghotso-primary focus:ring-offset-2 focus:ring-offset-ghotso-panel"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/10 bg-ghotso-panel/98 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-ghotso-primary bg-ghotso-bg-secondary shadow-glow-primary/20'
                        : 'text-ghotso-text-muted hover:text-ghotso-text hover:bg-ghotso-bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                className="pt-2 border-t border-white/10 mt-2"
              >
                <div className="px-4 py-2">
                  <LanguageSwitcher />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

