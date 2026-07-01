import { getPosts } from "@/lib/wordpress";


export default async function Home(){

const posts = await getPosts();


return (

<main>

<h1>
SuitBridge
</h1>


{
posts.map((post)=>(

<article key={post.id}>

<h2>
{post.title}
</h2>


<p>
{post.excerpt}
</p>


</article>

))
}


</main>

)

}