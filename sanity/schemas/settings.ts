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
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
    }),
    defineField({
      name: "bluesky",
      title: "Bluesky",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "mastodon",
      title: "Mastodon",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub",
      type: "string",
    }),
    defineField({
      name: "youtube",
      title: "YouTube",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "tumblr",
      title: "Tumblr",
      type: "string",
    }),
  ],
});
