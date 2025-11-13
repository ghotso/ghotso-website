'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProjectCard from '../ProjectCard';
import FadeIn from '../animations/FadeIn';
import StaggerChildren from '../animations/StaggerChildren';

export default function FeaturedProjects() {
  const t = useTranslations('home.featuredProjects');
  const tProjects = useTranslations('projects');

  const featuredProjects = [
    {
      id: 'shelflife',
      title: 'ShelfLife',
      description: 'A self-hosted tool that automatically maintains Plex libraries using rule-based automation. Features a fully managed form-based UI with no manual configuration or .env files required.',
      tags: ['media', 'automation'],
      status: 'wip' as const,
      githubUrl: 'https://github.com/ghotso/ShelfLife',
    },
    {
      id: 'has-pcloud-backup',
      title: 'HAS-pCloud-Backup',
      description: 'A native Home Assistant Backup Agent integration for pCloud, enabling users to store, restore, and manage encrypted Home Assistant backups directly in their pCloud account.',
      tags: ['automation', 'home-server'],
      status: 'active' as const,
      githubUrl: 'https://github.com/ghotso/HAS-pCloud-Backup',
    },
    {
      id: 'n8n-nodes-t0ggles',
      title: 'n8n-nodes-t0ggles',
      description: 'A lightweight n8n community node that connects n8n to the t0ggles tasks API.',
      tags: ['automation', 'api'],
      status: 'active' as const,
      githubUrl: 'https://github.com/ghotso/n8n-nodes-t0ggles',
    },
    {
      id: 'priobox',
      title: 'PrioBox',
      description: 'An Android email client designed around clarity and focus. Supports multiple IMAP accounts, VIP-only notifications, and a minimalist Jetpack Compose interface.',
      tags: ['api'],
      status: 'wip' as const,
      githubUrl: 'https://github.com/ghotso/PrioBox',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-ghotso-bg-secondary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3EDCFF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-ghotso-text">
              {t('title')}
            </h2>
            <p className="text-ghotso-text-muted">{t('subtitle')}</p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </StaggerChildren>

        <FadeIn delay={0.8} direction="up">
          <div className="text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center text-ghotso-accent hover:text-ghotso-primary transition-all duration-200 font-medium"
            >
              <span>{tProjects('viewProject')}</span>
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

