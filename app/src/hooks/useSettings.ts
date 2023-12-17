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
      "faviconUrl": favicon.asset->url,
      "homeGallery": homeGallery-> {
        title,
        "images": images[] {
          caption,
          alt,
          "url": asset->url,
        }
      }
    }
  `);

export function useSettings(errorCallback: ErrCallback): Settings | undefined {
  const [settings, setSettings] = useState<Settings | undefined>(undefined);

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
