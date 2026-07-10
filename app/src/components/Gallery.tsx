import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Image } from "../types";
import "./Gallery.css";
import { pathFromImg } from "../utils/pathFromImg";

interface GalleryProps {
  images: Image[];
  interactive?: boolean;
}

export function Gallery({ images, interactive = true }: GalleryProps) {
  const galleryRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = galleryRef.current;

    if (!container) {
      return;
    }

    const layout = () => {
      const styles = window.getComputedStyle(container);
      const rowHeight = Number.parseFloat(
        styles.getPropertyValue("grid-auto-rows"),
      );
      const rowGap = Number.parseFloat(styles.getPropertyValue("row-gap"));

      if (!rowHeight || Number.isNaN(rowHeight)) {
        return;
      }

      const items = Array.from(
        container.querySelectorAll<HTMLLIElement>(":scope > li"),
      );

      for (const item of items) {
        item.style.gridRowEnd = "span 1";
        const itemHeight = item.getBoundingClientRect().height;
        const span = Math.max(
          1,
          Math.ceil(
            (itemHeight + (Number.isNaN(rowGap) ? 0 : rowGap)) /
              (rowHeight + (Number.isNaN(rowGap) ? 0 : rowGap)),
          ),
        );
        item.style.gridRowEnd = `span ${span}`;
      }
    };

    const images = Array.from(
      container.querySelectorAll<HTMLImageElement>("img"),
    );
    const onImageLoad = () => layout();

    for (const image of images) {
      if (!image.complete) {
        image.addEventListener("load", onImageLoad);
      }
    }

    const resizeObserver = new ResizeObserver(() => layout());
    resizeObserver.observe(container);

    layout();

    window.addEventListener("resize", layout);

    return () => {
      window.removeEventListener("resize", layout);
      resizeObserver.disconnect();

      for (const image of images) {
        image.removeEventListener("load", onImageLoad);
      }
    };
  }, [images]);

  return (
    <ul className="gallery" ref={galleryRef}>
      {images.map((i) => (
        <li key={i.url}>
          {interactive ? (
            <Link to={`/${pathFromImg(i)}`}>
              <img src={i.url} alt={i.alt} />
              <div className="overlay" />
              <span className="overlay">{i.caption}</span>
            </Link>
          ) : (
            <div className="gallery-item-content">
              <img src={i.url} alt={i.alt} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
