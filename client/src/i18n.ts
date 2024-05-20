import deepmerge from 'deepmerge';
import { getRequestConfig } from 'next-intl/server';

import env from '@/env.mjs';

export const locales = ['en', 'es', 'pt'];

export const localePrefix = 'always';

export default getRequestConfig(async ({ locale }) => {
  async function getDefaultMessages() {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/messages?locale=en`);

    return (await res.json()).data[0].attributes;
  }

  async function getMessages() {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/messages?locale=${locale}`);

    return (await res.json()).data[0].attributes;
  }

  const CURRENT_MESSAGES = await getMessages();
  const DEFAULT_MESSAGES = await getDefaultMessages();

  if (!CURRENT_MESSAGES) throw new Error('No messages found for locale: ' + locale);
  if (!DEFAULT_MESSAGES) throw new Error('No messages found for locale: en');

  return {
    messages: deepmerge(DEFAULT_MESSAGES, CURRENT_MESSAGES),
  };
});
