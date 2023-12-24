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
      name: "about",
      title: "About",
      type: "text",
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
    defineField({
      name: "font",
      title: "Font",
      type: "string",
      options: {
        list: [
          { title: "Playfair Display", value: "Playfair Display" },
          { title: "Roboto Slab", value: "Roboto Slab" },
          { title: "Lato", value: "Lato" },
          { title: "Montserrat", value: "Montserrat" },
          { title: "Pacifico", value: "Pacifico" },
          { title: "Dancing Script", value: "Dancing Script" },
          { title: "Alegreya", value: "Alegreya" },
          { title: "Quicksand", value: "Quicksand" },
          { title: "Crimson Text", value: "Crimson Text" },
          { title: "Amatic SC", value: "Amatic SC" },
        ],
      },
    }),
  ],
});
