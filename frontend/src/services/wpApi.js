import { WP_BASE_URL, WP_CF7_FORM_ID, isWpConfigured } from '../config/wpConfig';

const withEmbed = (url) => `${url}${url.includes('?') ? '&' : '?'}_embed`;

const getMediaFromEmbedded = (embedded) => {
  try {
    const media = embedded?.['wp:featuredmedia']?.[0];
    return media?.source_url || media?.media_details?.sizes?.medium_large?.source_url || media?.media_details?.sizes?.large?.source_url || media?.media_details?.sizes?.full?.source_url || '';
  } catch (_) {
    return '';
  }
};

export async function fetchCategories({ perPage = 100 } = {}) {
  if (!isWpConfigured()) return [];
  const url = `${WP_BASE_URL}/wp/v2/categories?per_page=${perPage}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data = await res.json();
  return data.map((c) => ({ id: c.id, name: c.name, slug: c.slug, count: c.count }));
}

export async function fetchPosts({ page = 1, perPage = 9, categories = [] } = {}) {
  if (!isWpConfigured()) return [];
  const catParam = categories.length ? `&categories=${categories.join(',')}` : '';
  const url = withEmbed(`${WP_BASE_URL}/wp/v2/posts?page=${page}&per_page=${perPage}${catParam}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.map((p) => ({
    id: p.id,
    title: p.title?.rendered || '',
    excerpt: p.excerpt?.rendered || '',
    date: p.date_gmt || p.date,
    link: p.link,
    slug: p.slug,
    image: getMediaFromEmbedded(p._embedded),
    categories: p.categories || [],
    author: p._embedded?.author?.[0]?.name || 'MC Viagens'
  }));
}

export async function fetchPostBySlug(slug) {
  if (!isWpConfigured()) return null;
  const url = withEmbed(`${WP_BASE_URL}/wp/v2/posts?slug=${encodeURIComponent(slug)}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch post');
  const data = await res.json();
  return data.length ? data[0] : null;
}

// Contact submission via Contact Form 7 (if installed)
// Requires setting REACT_APP_WP_CF7_FORM_ID and a valid WordPress endpoint
export async function submitContactFormCF7(payload) {
  if (!isWpConfigured()) throw new Error('WordPress API not configured');
  if (!WP_CF7_FORM_ID) throw new Error('Contact Form 7 form ID not configured');

  // CF7 endpoint expects form fields (multipart/form-data)
  const siteBase = WP_BASE_URL.replace('/wp-json', '');
  const url = `${siteBase}/wp-json/contact-form-7/v1/contact-forms/${WP_CF7_FORM_ID}/feedback`;

  const formData = new FormData();
  // Map common fields. Adjust keys to your CF7 form field names if needed.
  formData.append('your-name', payload.name || '');
  formData.append('your-email', payload.email || '');
  formData.append('your-phone', payload.phone || '');
  formData.append('your-destination', payload.destination || '');
  formData.append('your-travelers', payload.travelers || '');
  formData.append('your-budget', payload.budget || '');
  formData.append('your-dates', payload.dates || '');
  formData.append('your-message', payload.message || '');

  const res = await fetch(url, {
    method: 'POST',
    body: formData
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.status !== 'mail_sent') {
    const msg = data.message || 'Contact submission failed';
    throw new Error(msg);
  }
  return data;
}