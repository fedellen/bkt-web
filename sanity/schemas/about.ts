import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Page Details",
  type: "document",
  fields: [
    defineField({
      name: "optionalTopImage",
      title: "Optional Top Image",
      type: "image",
      description:
        "An optional image to display at the top of the About page, above Blerb #1.",
    }),
    defineField({
      name: "blerbOne",
      title: "Blerb #1",
      type: "text",
      description: "The first paragraph of text to display on the About page.",
    }),
    defineField({
      name: "optionalMiddleImage",
      title: "Optional Middle Image",
      type: "image",
      description:
        "An optional image to display in the middle of the About page, between Blerb #1 and Blerb #2.",
    }),
    defineField({
      name: "blerbTwo",
      title: "Blerb #2",
      type: "text",
      description: "The second paragraph of text to display on the About page.",
    }),
    defineField({
      name: "optionalSecondMiddleImage",
      title: "Optional Second Middle Image",
      type: "image",
      description:
        "An optional image to display in the middle of the About page, between Blerb #2 and the Blerb #3.",
    }),
    defineField({
      name: "blerbThree",
      title: "Blerb #3",
      type: "text",
      description: "The third paragraph of text to display on the About page.",
    }),
    defineField({
      name: "optionalBottomImage",
      title: "Optional Bottom Image",
      type: "image",
      description:
        "An optional image to display at the bottom of the About page, below Blerb #3 and the footer.",
    }),
  ],
});
