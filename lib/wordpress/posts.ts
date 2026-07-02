import { wpFetch } from "./client";
import { WPPost } from "@/types/post";

export async function getPosts(): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("/suitbridge/v1/posts");
}

export async function getPost(slug: string): Promise<WPPost> {
  return wpFetch<WPPost>(`/suitbridge/v1/posts/${slug}`);
}