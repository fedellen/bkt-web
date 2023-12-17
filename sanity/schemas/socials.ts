import { defineField, defineType } from "sanity";

export default defineType({
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
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
