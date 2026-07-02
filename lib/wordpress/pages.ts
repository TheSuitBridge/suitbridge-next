import { wpFetch } from "./client";

export interface WPPage {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export async function getPage(slug: string): Promise<WPPage> {
  return wpFetch<WPPage>(`/wp/v2/pages?slug=${slug}`);
}