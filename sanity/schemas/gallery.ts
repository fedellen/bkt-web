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
      name: "images",
      title: "Images",
      type: "array",
      description:
        "DEPRECATED; use artworks instead. TO BE REMOVED! These wont show in website anymore, only artworks will.",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
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
