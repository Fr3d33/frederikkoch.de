import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const l = locale ?? 'de';
  const messages = (await import(`../messages/${l}.json`)).default;
  return { locale: l, messages };
});
