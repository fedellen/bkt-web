import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "pbcicdyt",
  dataset: "production",
  useCdn: import.meta.env.PROD,
  apiVersion: "2021-08-31",
});

// export const imageBuilder = imageUrlBuilder(sanityClient);
// export const urlFor = (source) => imageBuilder.image(source);

export default sanityClient;
