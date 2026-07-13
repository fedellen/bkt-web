import { useState, useEffect } from "react";
import sanityClient from "../sanity";
import { ErrCallback, Settings } from "../types";
import { usePalette } from "./usePalette";
import { loadFavicon } from "../utils/loadFavicon";

const fetchSettings = () =>
  sanityClient.fetch(`
      *[_type == "settings"] {
        ...,
        "palette": palette->,
        "socials": socials->,
        "aboutPage": aboutPage-> {
          blerbOne,
          blerbTwo,
          blerbThree,
          "optionalTopImageUrl": optionalTopImage.asset->url,
          "optionalBottomImageUrl": optionalBottomImage.asset->url,
          "optionalMiddleImageUrl": optionalMiddleImage.asset->url,
          "optionalSecondMiddleImageUrl": optionalSecondMiddleImage.asset->url
        },
        "faviconUrl": favicon.asset->url,
        "homeGallery": homeGallery-> {
          title,
          "images": artworks[]-> ${artworkQuery}
        },
        "logoUrl": logo.asset->url,
        "maxLogoHeightRem": maxLogoHeightRem,
        "storeLinks": storeLinks[] {
          link,
          headerText
        },
        "pageGalleries": pageGalleries[]-> {
          title,
          "images": artworks[]-> ${artworkQuery}
        }
      }
    `);

const fetchAllArtworks = () =>
  sanityClient.fetch(`
        *[_type == "artwork"] ${artworkQuery}
      `);

const artworkQuery = `
      {
            "caption": image.caption,
            "alt": image.alt,
            "description": image.description,
            "slug": image.address,
            "url": image.asset->url,
            "columnWeight": image.columnWeight,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "relatedImages": relatedImages[]-> {
              "alt": image.alt,
              "url": image.asset->url,
              "slug": image.address,
              "columnWeight": image.columnWeight,
              "caption": image.caption,
              "width": image.asset->metadata.dimensions.width,
              "height": image.asset->metadata.dimensions.height
            }
          }
    `;

export function useSettings(errorCallback: ErrCallback): Settings | undefined {
  const [settings, setSettings] = useState<Settings | undefined>(undefined);

  usePalette(settings?.palette);
  loadFavicon(settings?.faviconUrl);

  document
    .querySelector("body")
    ?.style.setProperty("--font-family", settings?.font ?? "century-gothic");

  useEffect(() => {
    fetchSettings()
      .then((settings) => {
        setSettings(settings[0]);
      })
      .then(() =>
        fetchAllArtworks().then((artworks) => {
          setSettings((prev) => (prev ? { ...prev, artworks } : undefined));
        }),
      )
      .catch((e) => errorCallback(e));
  }, [errorCallback]);

  return settings;
}
