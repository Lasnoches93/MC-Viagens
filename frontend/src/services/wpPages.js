import { WP_BASE_URL, isWpConfigured } from '../config/wpConfig';

export const wpEnabled = () => isWpConfigured();

const withEmbed = (url) => `${url}${url.includes('?') ? '&' : '?'}_embed`;

export async function fetchPages({ perPage = 100 } = {}) {
  if (!wpEnabled()) return [];
  const url = withEmbed(`${WP_BASE_URL}/wp/v2/pages?per_page=${perPage}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch pages');
  return res.json();
}

export async function fetchPageBySlug(slug) {
  if (!wpEnabled()) return null;
  const url = withEmbed(`${WP_BASE_URL}/wp/v2/pages?slug=${encodeURIComponent(slug)}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch page');
  const data = await res.json();
  return data?.[0] || null;
}

export function pageTitle(p) {
  return p?.title?.rendered || '';
}

export function pageContentHTML(p) {
  return p?.content?.rendered || '';
}