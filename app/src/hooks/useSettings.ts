import { useState, useEffect } from "react";
import sanityClient from "../sanity";
import { ErrCallback, Settings } from "../types";
import { usePalette } from "./usePalette";
import { loadFavicon } from "../utils/loadFavicon";

const fetchSettings = () =>
  sanityClient.fetch(
    // debug: get whole settings object

    // `*[_type == "settings"] {
    //   ...
    // }`,

    `
      *[_type == "settings"] {
        ...,
        "palette": palette->,
        "socials": socials->,
        "faviconUrl": favicon.asset->url,
        "homeGallery": homeGallery-> {
          title,
          "images": images[] {
            caption,
            alt,
            "url": asset->url,
          }
        },
        "storeLinks": storeLinks[] {
          link,
          headerText
        },
        "pageGalleries": pageGalleries[]-> {
          title,
          "images": images[] {
            caption,
            alt,
            "url": asset->url,
          }
        }
      }
    `,
  );

export function useSettings(errorCallback: ErrCallback): Settings | undefined {
  const [settings, setSettings] = useState<Settings | undefined>(undefined);
  console.log(settings);

  usePalette(settings?.palette);
  loadFavicon(settings?.faviconUrl);

  useEffect(() => {
    fetchSettings()
      .then((settings) => {
        setSettings(settings[0]);
      })
      .catch((e) => errorCallback(e));
  }, [errorCallback]);

  return settings;
}
