import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
    defineField({
      name: "palette",
      title: "Palette",
      type: "reference",
      to: [{ type: "palette" }],
    }),
    defineField({
      name: "homeGallery",
      title: "Home Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
      description: "The gallery to use for the home page",
    }),
    defineField({
      name: "pageGalleries",
      title: "Page Galleries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gallery" }] }],
      description:
        "Each gallery set here will create a page with the same :slug as the gallery",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "reference",
      to: [{ type: "socials" }],
    }),
  ],
});
