import {WPPost}
from "@/types/wordpress";


export default function PostCard(
{
post
}:{
post:WPPost
}
){


return (

<article>


<h2>

{post.title}

</h2>


<p>

{post.excerpt}

</p>


</article>


)


}