import { routing } from '@/i18n/routing';
import ProjectsContent from '@/components/projects/ProjectsContent';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function ProjectsPage() {
  return <ProjectsContent />;
}

