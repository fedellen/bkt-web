import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "your_project_id",
    dataset: "your_dataset",
    useCdn: true,
});

// export const imageBuilder = imageUrlBuilder(sanityClient);
// export const urlFor = (source) => imageBuilder.image(source);

export default sanityClient;
