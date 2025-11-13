import { routing } from '@/i18n/routing';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhatILike from '@/components/home/WhatILike';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhatILike />
    </>
  );
}

