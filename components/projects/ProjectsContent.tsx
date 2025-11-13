'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import FadeIn from '../animations/FadeIn';
import StaggerChildren from '../animations/StaggerChildren';

export default function ProjectsContent() {
  const t = useTranslations('projects');

  const allProjects = [
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

  const allTags = Array.from(
    new Set(allProjects.flatMap((p) => p.tags))
  ).sort();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects =
    selectedTag === null
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(selectedTag));

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

        <FadeIn delay={0.2} direction="up">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95 ${
                selectedTag === null
                  ? 'bg-ghotso-primary text-ghotso-bg shadow-glow-primary'
                  : 'bg-ghotso-panel border border-white/5 text-ghotso-text-muted hover:border-ghotso-accent/20 hover:scale-105'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 active:scale-95 ${
                  selectedTag === tag
                    ? 'bg-ghotso-accent/20 text-ghotso-accent border border-ghotso-accent/40 shadow-glow-accent'
                    : 'bg-ghotso-panel border border-white/5 text-ghotso-text-muted hover:border-ghotso-accent/20 hover:scale-105'
                }`}
              >
                {t(`tags.${tag}`) || tag}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </StaggerChildren>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-12 text-ghotso-text-muted">
              No projects found with this tag.
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

