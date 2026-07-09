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
          ${artworkQuery}
        },
        "logoUrl": logo.asset->url,
        "maxLogoHeightRem": maxLogoHeightRem,
        "storeLinks": storeLinks[] {
          link,
          headerText
        },
        "pageGalleries": pageGalleries[]-> {
          title,
          ${artworkQuery}
        }
      }
    `);

const artworkQuery = `
      "images": artworks[]-> {
            title,
            "caption": image.caption,
            "alt": image.alt,
            "description": image.description,
            "slug": image.address,
            "url": image.asset->url,
            "relatedImages": relatedImages[]-> {
              title,
              "alt": image.alt,
              "url": image.asset->url
            }
          }
    `;

export function useSettings(errorCallback: ErrCallback): Settings | undefined {
  const [settings, setSettings] = useState<Settings | undefined>(undefined);
  console.log("settings", settings);

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
      .catch((e) => errorCallback(e));
  }, [errorCallback]);

  return settings;
}
