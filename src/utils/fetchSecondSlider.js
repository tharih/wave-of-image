import { client } from "../client";


const query =`
*[_type == "slider_two"]`;
 

export const fetchSecondSlider = async() => {
    const slider_two = await client.fetch(query);
    return slider_two
    
}

