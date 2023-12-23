import { Link } from "react-router-dom";
import { GalleryI } from "../types";
import "./Gallery.css";

interface GalleryProps {
  gallery: GalleryI;
}

export function Gallery({ gallery }: GalleryProps) {
  return (
    <ul className="gallery">
      {gallery.images.map((i) => (
        <Link to={`/${i.url.split("/").pop()!}`}>
          <li key={i.url}>
            <img key={i.url} src={i.url} alt={i.alt} />
            <div className="overlay" />
            <span className="overlay">{i.caption}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
