import { wpFetch } from "./client";

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

export async function getMedia(id: number): Promise<WPMedia> {
  return wpFetch<WPMedia>(`/wp/v2/media/${id}`);
}