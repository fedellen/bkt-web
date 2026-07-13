import { CSSProperties, useEffect, useRef } from "react";
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

  const columnWeightFor = (columnWeight?: number): 1 | 2 | 3 => {
    const normalized = Number.isFinite(columnWeight)
      ? Math.trunc(columnWeight as number)
      : 1;

    if (normalized <= 1) {
      return 1;
    }

    if (normalized >= 3) {
      return 3;
    }

    return 2;
  };

  useEffect(() => {
    const container = galleryRef.current;

    if (!container) {
      return;
    }

    container.dataset.ready = "false";

    let animationFrame = 0;
    let cancelled = false;

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

    const scheduleLayout = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(layout);
    };

    const waitForImage = async (image: HTMLImageElement) => {
      if (typeof image.decode === "function") {
        try {
          await image.decode();
          return;
        } catch {
          return;
        }
      }

      if (image.complete) {
        return;
      }

      await new Promise<void>((resolve) => {
        const resolveOnce = () => resolve();
        image.addEventListener("load", resolveOnce, { once: true });
        image.addEventListener("error", resolveOnce, { once: true });
      });
    };

    const imageElements = Array.from(
      container.querySelectorAll<HTMLImageElement>("img"),
    );
    const onImageLoad = () => scheduleLayout();

    for (const image of imageElements) {
      if (!image.complete) {
        image.addEventListener("load", onImageLoad);
        image.addEventListener("error", onImageLoad);
      }
    }

    const resizeObserver = new ResizeObserver(() => scheduleLayout());
    resizeObserver.observe(container);

    scheduleLayout();

    window.addEventListener("resize", scheduleLayout);

    void Promise.allSettled(
      imageElements.map((image) => waitForImage(image)),
    ).then(() => {
      if (cancelled) {
        return;
      }

      scheduleLayout();
      animationFrame = window.requestAnimationFrame(() => {
        if (!cancelled) {
          container.dataset.ready = "true";
        }
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", scheduleLayout);
      resizeObserver.disconnect();

      for (const image of imageElements) {
        image.removeEventListener("load", onImageLoad);
        image.removeEventListener("error", onImageLoad);
      }
    };
  }, [images]);

  const galleryItemStyleFor = (image: Image): CSSProperties | undefined => {
    if (!image.width || !image.height) {
      return undefined;
    }

    return {
      aspectRatio: `${image.width} / ${image.height}`,
    };
  };

  return (
    <ul className="gallery" ref={galleryRef}>
      {images.map((i) => (
        <li key={i.url} data-column-weight={columnWeightFor(i.columnWeight)}>
          {interactive ? (
            <Link
              className="gallery-item-content"
              to={`/${pathFromImg(i)}`}
              style={galleryItemStyleFor(i)}
            >
              <img
                src={i.url}
                alt={i.alt}
                width={i.width}
                height={i.height}
                decoding="async"
              />
              <div className="overlay" />
              <span className="overlay">{i.caption}</span>
            </Link>
          ) : (
            <div
              className="gallery-item-content"
              style={galleryItemStyleFor(i)}
            >
              <img
                src={i.url}
                alt={i.alt}
                width={i.width}
                height={i.height}
                decoding="async"
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
