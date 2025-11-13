import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // For static export, we can't use headers, so requestLocale will fail
  // The locale is provided by the layout component via params instead
  // We use a default locale here, which will be overridden by the layout
  let locale: 'en' | 'de' = routing.defaultLocale as 'en' | 'de';
  
  // Only try to get locale from requestLocale in dev mode
  // In production with static export, this will fail, so we skip it
  if (process.env.NODE_ENV !== 'production') {
    try {
      const requestedLocale = await requestLocale;
      if (requestedLocale && routing.locales.includes(requestedLocale as any)) {
        locale = requestedLocale as 'en' | 'de';
      }
    } catch {
      // Ignore errors - use default locale
    }
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

