'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import StaggerChildren from '../animations/StaggerChildren';
import ScaleOnHover from '../animations/ScaleOnHover';

export default function ContactContent() {
  const t = useTranslations('contact');

  const socialLinks = [
    {
      name: t('email'),
      url: 'mailto:contact@ghotso.dev',
      icon: '✉️',
    },
    {
      name: t('github'),
      url: 'https://github.com/ghotso',
      icon: '💻',
    },
    {
      name: t('linkedin'),
      url: 'https://www.linkedin.com/in/mguggenbichler',
      icon: '💼',
    },
    {
      name: t('x'),
      url: 'https://x.com/ghotso_dev',
      icon: '🐦',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ghotso-text">
              {t('title')}
            </h1>
            <p className="text-xl text-ghotso-text-muted mb-2">{t('subtitle')}</p>
            <p className="text-ghotso-text-muted max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 10px 30px rgba(62, 220, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-ghotso-panel rounded-2xl p-8 border border-white/5 hover:border-ghotso-accent/40 hover:shadow-glow-accent transition-all duration-300 text-center"
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-ghotso-primary mb-2 group-hover:text-ghotso-accent transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-ghotso-text-muted">
                    {link.url.replace('mailto:', '').replace('https://', '')}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </StaggerChildren>
      </div>
    </div>
  );
}

