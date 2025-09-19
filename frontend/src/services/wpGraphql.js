import { WP_GRAPHQL_URL } from '../config/wpConfig';

export const hasGraphQL = () => !WP_GRAPHQL_URL.includes('YOUR_WP_SITE_URL');

export async function graphqlQuery(query, variables = {}) {
  if (!hasGraphQL()) throw new Error('GraphQL not configured');
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  if (!res.ok) throw new Error('GraphQL request failed');
  const data = await res.json();
  if (data.errors) throw new Error(data.errors.map(e => e.message).join('; '));
  return data.data;
}

// Example queries placeholders
export const QUERIES = {
  recentPosts: `
    query RecentPosts($first: Int = 6) {
      posts(first: $first) {
        nodes {
          id
          slug
          title
          date
          featuredImage { node { sourceUrl } }
        }
      }
    }
  `,
};