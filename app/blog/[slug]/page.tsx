import {
getPostBySlug
}
from "@/lib/wordpress";


export default async function BlogSingle(
{
params,
}:{
params:{
slug:string
}
}

){


const post =
await getPostBySlug(
params.slug
);



if(!post){

return (

<h1>
Post Not Found
</h1>

)

}



return (

<main className="container py-20">


<h1>

{post.title}

</h1>



<div

dangerouslySetInnerHTML={{

__html:
post.content

}}

/>



</main>


)

}