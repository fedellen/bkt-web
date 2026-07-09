import { Image } from "../types";
import "./ImagePage.css";

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
      {relatedImages && (
        <ul className="gallery">
          {relatedImages.map((i) => (
            <li key={i.url}>
              <img src={i.url} alt={i.alt} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
