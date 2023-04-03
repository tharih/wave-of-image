import { client } from "../client";


const query =`
*[_type == "slider"]`;
 

export const fetchMainSlider = async() => {
    const slider = await client.fetch(query);
    return slider
    
}

