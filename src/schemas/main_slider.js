import { defineField, defineType } from "sanity";

export default defineType({
  name: "slider",
  title: "Photography Slider",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    
  ],
});
