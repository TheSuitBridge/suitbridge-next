const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API!;

interface WPFetchOptions extends RequestInit {
  revalidate?: number;
}

export async function wpFetch<T>(
  endpoint: string,
  options: WPFetchOptions = {}
): Promise<T> {
  const { revalidate = 300, ...fetchOptions } = options;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...fetchOptions,
    next: {
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(
      `WordPress API Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}