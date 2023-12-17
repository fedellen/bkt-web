import { useEffect } from "react";
import { useIsDarkMode } from "./useIsDarkMode";
import { Palette } from "../types";

export function usePalette(palette: Palette | undefined) {
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const defaultBackgroundColor = isDarkMode ? "#000" : "#fff";
    const defaultTextColor = isDarkMode ? "#fff" : "#000";

    let backgroundColor = defaultBackgroundColor;
    let textColor = defaultTextColor;
    if (palette) {
      backgroundColor = isDarkMode
        ? palette.darkest ?? defaultBackgroundColor
        : palette.lightest ?? defaultBackgroundColor;
      textColor = isDarkMode
        ? palette.lightest ?? defaultTextColor
        : palette.darkest ?? defaultTextColor;
      document
        .querySelector("body")
        ?.style.setProperty("--bg-color", backgroundColor);
      document
        .querySelector("body")
        ?.style.setProperty("--text-color", textColor);
    }
  }, [palette, isDarkMode]);
}
