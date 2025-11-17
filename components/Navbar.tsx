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

          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            {/* GitHub icon - Desktop */}
            <motion.a
              href="https://github.com/ghotso"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex p-2 rounded-lg text-ghotso-text-muted hover:text-ghotso-primary hover:bg-ghotso-bg-secondary/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            
            {/* GitHub Sponsors button - Desktop, ganz rechts */}
            <div className="hidden md:block">
              <iframe
                src="https://github.com/sponsors/ghotso/button"
                title="Sponsor ghotso"
                height="32"
                width="114"
                style={{ border: 0, borderRadius: '6px' }}
              />
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
              {/* GitHub and Sponsors - Mobile */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
                className="pt-2 border-t border-white/10 mt-2"
              >
                <div className="px-4 py-2 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <a
                      href="https://github.com/ghotso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-ghotso-text-muted hover:text-ghotso-primary hover:bg-ghotso-bg-secondary/30 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex justify-center">
                    <iframe
                      src="https://github.com/sponsors/ghotso/button"
                      title="Sponsor ghotso"
                      height="32"
                      width="114"
                      style={{ border: 0, borderRadius: '6px' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

