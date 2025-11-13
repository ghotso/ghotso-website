'use client';

import { useTranslations } from 'next-intl';

export default function LegalContent() {
  const t = useTranslations('legal');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ghotso-text">
            {t('title')}
          </h1>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Imprint */}
          <section className="bg-ghotso-panel rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-ghotso-primary">
              {t('imprint.title')}
            </h2>
            <div className="text-ghotso-text-muted whitespace-pre-line leading-relaxed">
              {t('imprint.content')}
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-ghotso-panel rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-ghotso-primary">
              {t('dataProtection.title')}
            </h2>
            <div className="text-ghotso-text-muted leading-relaxed">
              {t('dataProtection.content')}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

