'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import StaggerChildren from '../animations/StaggerChildren';

export default function AboutContent() {
  const t = useTranslations('about');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ghotso-text">
              {t('title')}
            </h1>
            <p className="text-xl text-ghotso-text-muted">{t('subtitle')}</p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.2}>
          <div className="space-y-12">
            <FadeIn delay={0.2} direction="up">
              <section className="bg-ghotso-panel rounded-2xl p-8 border border-white/5 hover:border-ghotso-accent/20 transition-all duration-300 hover:shadow-glow-accent/20">
                <h2 className="text-2xl font-bold mb-4 text-ghotso-primary">
                  {t('journey.title')}
                </h2>
                <p className="text-ghotso-text-muted leading-relaxed">
                  {t('journey.content')}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <section className="bg-ghotso-panel rounded-2xl p-8 border border-white/5 hover:border-ghotso-accent/20 transition-all duration-300 hover:shadow-glow-accent/20">
                <h2 className="text-2xl font-bold mb-4 text-ghotso-primary">
                  {t('interests.title')}
                </h2>
                <p className="text-ghotso-text-muted leading-relaxed">
                  {t('interests.content')}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <section className="bg-ghotso-panel rounded-2xl p-8 border border-white/5 hover:border-ghotso-accent/20 transition-all duration-300 hover:shadow-glow-accent/20">
                <h2 className="text-2xl font-bold mb-6 text-ghotso-primary">
                  {t('funFacts.title')}
                </h2>
                <ul className="space-y-3">
                  {(
                    t.raw('funFacts.items') as string[]
                  ).map((fact: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start text-ghotso-text-muted group/item"
                    >
                      <span className="text-ghotso-accent mr-3 group-hover/item:scale-125 transition-transform">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          </div>
        </StaggerChildren>
      </div>
    </div>
  );
}

