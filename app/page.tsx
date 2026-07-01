import {getPosts}
from "@/lib/wordpress";

import PostCard
from "@/components/cards/PostCard";


export default async function Home(){


const posts =
await getPosts();



return (

<main>


<section className="py-20">

<h1>

Industrial Flow Control Knowledge Platform Newwww

</h1>


<p>

Engineering guides, equipment analysis and supplier insights.

</p>


</section>



<section>


{
posts.map(
(post)=>(

<PostCard
key={post.id}
post={post}
/>

)

)

}


</section>



</main>

)

}