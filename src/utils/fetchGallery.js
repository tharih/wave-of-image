import { client } from "../client";


const query =`
*[_type == "gallery"]{
    ...,
    category->{title}
}`;
 

export const fetchGallery = async() => {
    const gallery = await client.fetch(query);
    return gallery
    
}

