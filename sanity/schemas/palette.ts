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
      name: "darkest",
      title: "Deprecated Darkest",
      type: "string",
      description: "To Be removed.",
    }),
    defineField({
      name: "lightest",
      title: "Deprecated Lightest",
      type: "string",
      description: "To Be removed.",
    }),
    defineField({
      name: "base",
      title: "Deprecated Base",
      type: "string",
      description: "To Be removed.",
    }),
    defineField({
      name: "darkText",
      title: "Dark Text",
      type: "string",
      description:
        "Optional, must be a hex code color. Text color for dark mode",
    }),
    defineField({
      name: "darkBg",
      title: "Dark BG",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the bg color for dark mode.",
    }),
    defineField({
      name: "darkHover",
      title: "Dark Hover",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the primary color for the palette (if needed)",
    }),
    defineField({
      name: "lightText",
      title: "Light Text",
      type: "string",
      description:
        "Optional, must be a hex code color. This is another light color for the palette (if needed)",
    }),
    defineField({
      name: "lightBg",
      title: "Light BG",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the bg color for light mode.",
    }),
    defineField({
      name: "lightHover",
      title: "Light Hover",
      type: "string",
      description:
        "Optional, must be a hex code color. This is the hover color for light mode.",
    }),
  ],
});
