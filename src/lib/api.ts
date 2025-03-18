// API configuration for Strapi
export const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
export const API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function fetchAPI(path: string) {
  const requestUrl = `${API_URL}${path}`;
  const response = await fetch(requestUrl, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new Error(`API call failed: ${response.statusText}`);
}

// Example function to fetch content from Strapi
export async function getPageContent(slug: string) {
  const path = `/api/pages?filters[slug][$eq]=${slug}&populate=*`;
  const response = await fetchAPI(path);
  return response.data[0];
}
