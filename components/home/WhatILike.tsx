'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import StaggerChildren from '../animations/StaggerChildren';

export default function WhatILike() {
  const t = useTranslations('home.whatILike');

  const interests = [
    'APIs',
    'Automation workflows',
    'Media servers (Plex/Radarr/Sonarr)',
    'Home server projects',
    'Monitoring & Observability',
    'Gaming-inspired side projects',
    'Tech influenced by Japanese minimalism',
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-ghotso-text">
              {t('title')}
            </h2>
            <p className="text-ghotso-text-muted">{t('subtitle')}</p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group px-6 py-3 bg-ghotso-panel border border-ghotso-accent/20 rounded-xl text-ghotso-text hover:border-ghotso-accent/40 hover:shadow-glow-accent hover:scale-105 active:scale-95 transition-all duration-200 cursor-default"
              >
                {interest}
              </div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}

