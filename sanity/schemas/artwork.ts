import { defineField, defineType } from "sanity";

export default defineType({
  name: "artwork",
  title: "Artwork",
  description:
    "Represents an artwork with an image, title, and optional related images. Each artwork that is part of a gallery gets a page created on the website.",
  type: "document",
  fields: [
    defineField({
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
          description:
            "The alternative text for the artwork image displayed on the website for screen readers. This helps visually impaired users understand the content of the image .",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
          description:
            "Optional caption for the artwork displayed on the website.",
        },
        {
          name: "address",
          type: "string",
          title: "Address",
          description:
            "Optional address for the artwork to be displayed on the browser link. Also known as a URL slug. Example: 'bonniekthompson.com/artwork-address' where `artwork-address` is the value of this field. This defaults to the image filename when not specified.",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
          description:
            "Optional description for the artwork displayed on the artwork page below the caption.",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Optional title of the artwork to identify and search for it in the Sanity studio CMS UI",
    }),
    defineField({
      name: "relatedImages",
      title: "Related Images",
      type: "array",
      description:
        "Optional related images for the artwork to be displayed on the Artwork page.",
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
