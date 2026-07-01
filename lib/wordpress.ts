import { WPPost } from "@/types/wordpress";
const API = "https://suitbridge.com/wp-json/suitbridge/v1";
export async function getPosts()
:Promise<WPPost[]>{
const res =
await fetch(
    `${API}/posts`,
    {
        next:{
        revalidate:60
        }
    }
);
if(!res.ok){
throw new Error(
"Failed to fetch posts"
);

}

return res.json();

}