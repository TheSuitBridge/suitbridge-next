const API_URL = "https://suitbridge.com/wp-json/suitbridge/v1";
export interface Post {
    id:number;
    title:string;
    slug:string;
    excerpt:string;
    content:string;
    image:string | null;
    category:string[];
}
export async function getPosts():Promise<Post[]> {
    const res = await fetch(
        `${API_URL}/posts`,
        {
            next:{
            revalidate:60
            }
        }
    );
    return res.json();
}