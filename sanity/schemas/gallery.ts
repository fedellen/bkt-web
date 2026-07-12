import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "artworks",
      title: "Artworks",
      type: "array",
      of: [
        {
          name: "artwork",
          title: "Artwork",
          type: "reference",
          to: [{ type: "artwork" }],
          options: {
            layout: "grid",
          },
        },
      ],
    }),
  ],
});
