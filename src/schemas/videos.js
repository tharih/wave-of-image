import { defineField, defineType } from "sanity";

export default defineType({
    name: "video",
    title: "Video",
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
            name: "link",
            title:"YouTube Link",
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