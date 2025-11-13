'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ghotso-primary/5 via-transparent to-ghotso-accent/5 animate-gradient pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <FadeIn delay={0.2} direction="up">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-glow-primary animate-float group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/g.png"
                    alt="ghotso logo"
                    width={96}
                    height={96}
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Subtle glow animation */}
                <div className="absolute inset-0 rounded-full bg-ghotso-primary/20 blur-xl animate-ping-slow pointer-events-none" />
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-ghotso-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-ghotso-text">
              {t('headline')}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6} direction="up">
            <p className="text-xl md:text-2xl text-ghotso-primary mb-6 font-semibold">
              {t('subline')}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8} direction="up">
            <p className="text-lg text-ghotso-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('paragraph')}
            </p>
          </FadeIn>

          <FadeIn delay={1} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-8 py-3 bg-ghotso-primary text-ghotso-bg font-semibold rounded-xl hover:shadow-glow-primary hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden"
              >
                <span className="relative z-10">{t('viewProjects')}</span>
                <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <a
                href="https://github.com/ghotso"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 border border-ghotso-accent/30 text-ghotso-accent font-semibold rounded-xl hover:shadow-glow-accent hover:border-ghotso-accent/50 hover:bg-ghotso-accent/10 active:scale-95 transition-all duration-200"
              >
                <span>{t('github')}</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

