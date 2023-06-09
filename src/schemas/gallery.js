import { defineField, defineType } from "sanity";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title:"Image",
            type: "image",
            options:{
                hotspot:true
            }
             
        }),

        defineField({
            name: "alt",
            title:"Alt",
            type: "string",
        }),
        defineField({
            name: "category",
            title:"Category",
            type: "reference",
            to:{
                type:"category"
            }
        })
    ],
});