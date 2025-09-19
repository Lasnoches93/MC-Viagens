// Centralized WordPress headless configuration
// Override these using frontend environment variables if you have them configured at build time.
// Do not commit secrets. These are public endpoints only.

export const WP_BASE_URL = (process.env.REACT_APP_WORDPRESS_API_URL || 'https://YOUR_WP_SITE_URL/wp-json').replace(/\/$/, '');
export const WP_GRAPHQL_URL = (process.env.REACT_APP_WORDPRESS_GRAPHQL_URL || 'https://YOUR_WP_SITE_URL/graphql').replace(/\/$/, '');
export const WP_CF7_FORM_ID = process.env.REACT_APP_WP_CF7_FORM_ID || '';

export const isWpConfigured = () => !WP_BASE_URL.includes('YOUR_WP_SITE_URL');

// Optional feature flags (autodetected when possible)
export const WP_FEATURES = {
  posts: true,
  categories: true,
  cf7: !!WP_CF7_FORM_ID,
  graphql: !WP_GRAPHQL_URL.includes('YOUR_WP_SITE_URL')
};