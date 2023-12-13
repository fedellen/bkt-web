import { defineCliConfig } from "sanity/cli";
import { projectId } from "./constants";

export default defineCliConfig({
  api: {
    projectId,
    dataset: "production",
  },
});
