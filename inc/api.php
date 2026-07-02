add_action(
'rest_api_init',
function(){

register_rest_route(
'suitbridge/v1',
'/posts/(?P<slug>[a-zA-Z0-9-]+)',
array(

'methods'=>'GET',

'callback'=>'suitbridge_single_post',

'permission_callback'=>'__return_true'

)

);

});



function suitbridge_single_post($request){


$slug =
$request['slug'];



$post =
get_page_by_path(
$slug,
OBJECT,
'post'
);



if(!$post){

return new WP_Error(
'post_not_found',
'Post not found',
array(
'status'=>404
)
);

}



return array(

'id'=>$post->ID,

'title'=>get_the_title($post->ID),

'content'=>apply_filters(
'the_content',
$post->post_content
),

'excerpt'=>get_the_excerpt($post->ID),

'image'=>get_the_post_thumbnail_url(
$post->ID,
'large'
)

);


}