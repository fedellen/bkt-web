import { defineField, defineType } from "sanity";
import { ColorWheelIcon } from "@sanity/icons";

export default defineType({
  name: "palette",
  title: "Palette",
  type: "document",
  icon: ColorWheelIcon,
  description: "Colors to use for the site's theme.",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the palette",
    }),
    defineField({
      name: "lightest",
      title: "Lightest",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the bg color for light mode, text color for dark mode",
    }),
    defineField({
      name: "darkest",
      title: "Darkest",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the bg color for dark mode, text color for light mode",
    }),
    defineField({
      name: "base",
      title: "Base",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the primary color for the palette (if needed)",
    }),
    defineField({
      name: "light",
      title: "Light",
      type: "string",
      description:
        "Optional, must be a hex code color. This is another light color for the palette (if needed)",
    }),
    defineField({
      name: "dark",
      title: "Dark",
      type: "string",
      description:
        "Optional, must be a hex code color. This is another dark color for the palette (if needed)",
    }),
  ],
});
