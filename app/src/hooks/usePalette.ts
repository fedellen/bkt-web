import { useEffect } from "react";
import { useIsDarkMode } from "./useIsDarkMode";
import { Palette } from "../types";

const defaultLightest = "#fff";
const defaultDarkest = "#000";
const defaultBase = "#968282";

export function usePalette(palette: Palette | undefined) {
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const darkest = palette?.darkBg ?? palette?.lightText ?? defaultDarkest;
    const lightest = palette?.darkText ?? palette?.lightBg ?? defaultLightest;
    const base = palette?.darkHover ?? palette?.lightHover ?? defaultBase;
    console.log("palette", palette);

    const backgroundColor = isDarkMode
      ? (palette?.darkBg ?? darkest)
      : (palette?.lightBg ?? lightest);
    const textColor = isDarkMode
      ? (palette?.darkText ?? darkest)
      : (palette?.lightText ?? lightest);
    const hoverColor = isDarkMode
      ? (palette?.darkHover ?? base)
      : (palette?.lightHover ?? base);

    document.querySelector("body")?.style.setProperty("--bg", backgroundColor);
    document.querySelector("body")?.style.setProperty("--hover", hoverColor);
    document.querySelector("body")?.style.setProperty("--text", textColor);
  }, [palette, isDarkMode]);
}
