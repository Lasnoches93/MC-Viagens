import { WP_BASE_URL, isWpConfigured } from '../config/wpConfig';

const getMedia = (embedded, meta = {}) => {
  try {
    const media = embedded?.['wp:featuredmedia']?.[0];
    const featured = (
      media?.source_url ||
      media?.media_details?.sizes?.large?.source_url ||
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.media_details?.sizes?.full?.source_url ||
      ''
    );
    if (featured) return featured;
  } catch (_) {
    // ignore
  }
  // Fallback to custom meta image_url if provided
  if (meta && typeof meta.image_url === 'string' && meta.image_url.length > 6) {
    return meta.image_url;
  }
  return '';
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
    const meta = p.meta || {};
    return {
      id: p.id,
      name: p.title?.rendered || '',
      slug: p.slug,
      description: (meta.description_long || '').toString() || (p.excerpt?.rendered || ''),
      image: getMedia(embedded, meta),
      priceEUR: Number(meta.price_eur || 0),
      originalPriceEUR: Number(meta.original_price_eur || 0),
      duration: meta.duration || '',
      flightTime: meta.flight_time || '',
      stops: meta.stops || '',
      rating: Number(meta.rating || 0),
      reviews: Number(meta.reviews || 0),
      highlights: Array.isArray(meta.highlights) ? meta.highlights : [],
      baggage: {
        cabin: meta.baggage_cabin || '',
        checked: meta.baggage_checked || '',
        backpack: meta.baggage_backpack || ''
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