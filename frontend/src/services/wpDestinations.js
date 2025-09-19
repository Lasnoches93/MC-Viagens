import { WP_BASE_URL, isWpConfigured } from '../config/wpConfig';

const getMedia = (embedded) => {
  try {
    const media = embedded?.['wp:featuredmedia']?.[0];
    return (
      media?.source_url ||
      media?.media_details?.sizes?.large?.source_url ||
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.media_details?.sizes?.full?.source_url ||
      ''
    );
  } catch (_) {
    return '';
  }
};

const getTerms = (embedded) => {
  try {
    const terms = embedded?.['wp:term'] || [];
    const flat = terms.flat();
    return flat.map((t) => ({ id: t.id, name: t.name, slug: t.slug, taxonomy: t.taxonomy }));
  } catch (_) {
    return [];
  }
};

export async function fetchRegions() {
  if (!isWpConfigured()) return [];
  // Taxonomy rest base assumed as 'regions'
  const url = `${WP_BASE_URL}/wp/v2/regions?per_page=100`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((t) => ({ id: t.id, name: t.name, slug: t.slug }));
}

export async function fetchDestinations({ perPage = 12, regionId = null } = {}) {
  if (!isWpConfigured()) return [];
  const params = new URLSearchParams({ per_page: String(perPage), _embed: '' });
  if (regionId) params.append('regions', String(regionId));
  const url = `${WP_BASE_URL}/wp/v2/destination?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((p) => {
    const embedded = p._embedded || {};
    const terms = getTerms(embedded);
    const regionNames = terms.filter((t) => t.taxonomy === 'region').map((t) => t.name);
    return {
      id: p.id,
      name: p.title?.rendered || '',
      slug: p.slug,
      description: (p.meta?.description_long || '').toString() || (p.excerpt?.rendered || ''),
      image: getMedia(embedded),
      priceEUR: Number(p.meta?.price_eur || 0),
      originalPriceEUR: Number(p.meta?.original_price_eur || 0),
      duration: p.meta?.duration || '',
      flightTime: p.meta?.flight_time || '',
      stops: p.meta?.stops || '',
      rating: Number(p.meta?.rating || 0),
      reviews: Number(p.meta?.reviews || 0),
      highlights: Array.isArray(p.meta?.highlights) ? p.meta.highlights : [],
      baggage: {
        cabin: p.meta?.baggage_cabin || '',
        checked: p.meta?.baggage_checked || '',
        backpack: p.meta?.baggage_backpack || ''
      },
      regions: regionNames
    };
  });
}

export async function fetchDestinationBySlug(slug) {
  if (!isWpConfigured()) return null;
  const url = `${WP_BASE_URL}/wp/v2/destination?slug=${encodeURIComponent(slug)}&_embed`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data.length ? data[0] : null;
}