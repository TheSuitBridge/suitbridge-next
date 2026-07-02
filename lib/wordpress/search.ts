import { wpFetch } from "./client";

export interface WPSearchResult {
  id: number;
  title: string;
  url: string;
}

export async function searchPosts(
  keyword: string
): Promise<WPSearchResult[]> {
  return wpFetch<WPSearchResult[]>(
    `/wp/v2/search?search=${encodeURIComponent(keyword)}`
  );
}