import { wpFetch } from "./client";

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export async function getCategories(): Promise<WPCategory[]> {
  return wpFetch<WPCategory[]>("/wp/v2/categories");
}