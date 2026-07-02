import { WPPost } from "@/types/wordpress";
const API_URL =
`${process.env.NEXT_PUBLIC_WORDPRESS_API}/suitbridge/v1`;
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

export async function getPostBySlug(
slug:string
){


const res =
await fetch(

`${API_URL}/posts/${slug}`,

{
next:{
revalidate:60
}
}

);


if(!res.ok){

return null;

}


return res.json();


}