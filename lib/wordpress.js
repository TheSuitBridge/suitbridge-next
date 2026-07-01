const API_URL =
"https://suitbridge.com/wp-json/suitbridge/v1";


export async function getPosts(){

const res = await fetch(
`${API_URL}/posts`
);


return res.json();

}