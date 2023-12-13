import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schema from "./schemas";
import { projectId } from "./constants";

export default defineConfig({
  name: "default",
  title: "bkt-web",

  projectId,
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema,
  },
});
