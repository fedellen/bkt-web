import { Image } from "../types";
import "./ImagePage.css";
import { Gallery } from "./Gallery";

interface ImagePageProps {
  image: Image;
}

export function ImagePage({ image }: ImagePageProps) {
  const { url, alt, caption, description, relatedImages } = image;

  return (
    <section id="imagePage">
      <img alt={alt} src={url} />
      {caption && <p>{caption}</p>}
      {description && <p className="image-description">{description}</p>}
      {relatedImages && <Gallery images={relatedImages} interactive={true} />}
    </section>
  );
}
