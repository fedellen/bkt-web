import { GalleryI } from "../types";

interface GalleryProps {
  gallery: GalleryI;
}

export function Gallery({ gallery }: GalleryProps) {
  return (
    <section className="gallery">
      {gallery.images.map((i) => (
        <img key={i.url} src={i.url} alt={i.alt} />
      ))}
    </section>
  );
}
