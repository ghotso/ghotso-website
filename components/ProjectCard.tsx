'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ScaleOnHover from './animations/ScaleOnHover';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    status: 'active' | 'wip' | 'maintained';
    githubUrl?: string;
    projectUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');

  // Extract repo name from GitHub URL
  const getRepoName = (githubUrl?: string): string | null => {
    if (!githubUrl) return null;
    const match = githubUrl.match(/github\.com\/ghotso\/([^/]+)/);
    return match ? match[1] : null;
  };

  const repoName = getRepoName(project.githubUrl);

  // Projects that should not show version badge
  const projectsWithoutVersion = ['ShelfLife'];
  const showVersionBadge = repoName && !projectsWithoutVersion.includes(repoName);

  const statusColors = {
    active: 'bg-success/20 text-success border-success/30',
    wip: 'bg-warning/20 text-warning border-warning/30',
    maintained: 'bg-ghotso-accent/20 text-ghotso-accent border-ghotso-accent/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-ghotso-panel rounded-2xl p-6 md:p-8 border border-white/5 hover:border-ghotso-accent/20 transition-all duration-300 hover:shadow-glow-accent"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-ghotso-primary">{project.title}</h3>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-lg border ${statusColors[project.status]}`}
        >
          {t(`status.${project.status}`)}
        </span>
      </div>

      <p className="text-ghotso-text-muted mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-ghotso-bg-secondary border border-ghotso-accent/20 rounded-lg text-ghotso-text-muted"
          >
            {t(`tags.${tag}`) || tag}
          </span>
        ))}
      </div>

      {/* Shields badges */}
      {repoName && (
        <div className="flex items-center gap-2 mt-3 mb-4">
          {showVersionBadge && (
            <img
              src={`https://shields.ghotso.dev/github/v/release/ghotso/${repoName}?label=version&color=C7FF33`}
              alt={`Version badge for ${project.title}`}
              className="h-5"
            />
          )}
          <img
            src={`https://shields.ghotso.dev/github/last-commit/ghotso/${repoName}?color=3FD7FF`}
            alt={`Last commit badge for ${project.title}`}
            className="h-5"
          />
        </div>
      )}

      <div className="flex gap-4">
        {project.projectUrl && (
          <ScaleOnHover scale={1.05}>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link text-sm text-ghotso-accent hover:text-ghotso-primary transition-all duration-200 inline-flex items-center"
            >
              <span>{t('viewProject')}</span>
              <motion.svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </a>
          </ScaleOnHover>
        )}
        {project.githubUrl && (
          <ScaleOnHover scale={1.05}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link text-sm text-ghotso-accent hover:text-ghotso-primary transition-all duration-200 inline-flex items-center"
            >
              <span>{t('viewCode')}</span>
              <motion.svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </a>
          </ScaleOnHover>
        )}
      </div>
    </motion.div>
  );
}

