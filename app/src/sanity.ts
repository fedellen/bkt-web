import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "pbcicdyt",
  dataset: "production",
  useCdn: import.meta.env.PROD,
  apiVersion: "2021-08-31",
});

export default sanityClient;
