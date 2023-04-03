import { client } from "../client";


const query =`
*[_type == "video"]{
    ...,
    category->{title}
}`;
 

export const fetchVideo = async() => {
    const video = await client.fetch(query);
    return video
    
}

