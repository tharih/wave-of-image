import { client } from "../client";


const query =`
*[_type == "gallery"][0...10] | order(_createdAt asc){
    ...,
    category->{title}
}`;
 

export const fetchLatestGallery = async() => {
    const gallery = await client.fetch(query);
    return gallery
    
}

