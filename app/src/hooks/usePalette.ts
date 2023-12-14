import { useEffect } from "react";
import { useIsDarkMode } from "./useIsDarkMode";
import { Settings } from "./useSettings";
import sanityClient from "../sanity";

export interface Palette {
  _id: string;
  _type: "palette";
  name: string;
  lightest: string;
  darkest: string;
}

export function usePalette(settings: Settings | undefined) {
  const fetchPalette = (paletteRef: string) =>
    sanityClient.fetch<Palette[]>(`*[_id == "${paletteRef}"]`);
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const defaultBackgroundColor = isDarkMode ? "#000" : "#fff";
    const defaultTextColor = isDarkMode ? "#fff" : "#000";

    let backgroundColor = defaultBackgroundColor;
    let textColor = defaultTextColor;
    if (settings && settings.palette) {
      fetchPalette(settings.palette._ref)
        .then((p) => {
          const palette = p[0];
          // console.log("palette", palette);
          // console.log("palette.darkest", palette.darkest);

          backgroundColor = isDarkMode
            ? palette.darkest ?? defaultBackgroundColor
            : palette.lightest ?? defaultBackgroundColor;
          textColor = isDarkMode
            ? palette.lightest ?? defaultTextColor
            : palette.darkest ?? defaultTextColor;
        })
        .catch((e) => console.error(e))
        .finally(() => {
          document
            .getElementById("root")
            ?.style.setProperty("--bg-color", backgroundColor);
          document
            .getElementById("root")
            ?.style.setProperty("--text-color", textColor);
        });
    }
  }, [settings, isDarkMode]);
}
