import { defineField, defineType } from "sanity";

export default defineType({
  name: "slider_two",
  title: "Retouching Slider",
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
