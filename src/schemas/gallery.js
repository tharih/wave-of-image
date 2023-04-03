import { defineField, defineType } from "sanity";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title:"Gallery",
            type: "array",
            of:[
                {
                    type: "image",
                },
            ],
        }),
    ],
});