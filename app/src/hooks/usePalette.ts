import { useEffect } from "react";
import { useIsDarkMode } from "./useIsDarkMode";
import { Palette } from "../types";

const defaultLightest = "#fff";
const defaultDarkest = "#000";
const defaultBase = "#968282";

export function usePalette(palette: Palette | undefined) {
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const darkest = palette?.darkest ?? defaultDarkest;
    const lightest = palette?.lightest ?? defaultLightest;
    const base = palette?.base ?? defaultBase;

    const backgroundColor = isDarkMode ? darkest : lightest;
    const textColor = isDarkMode ? lightest : darkest;

    document.querySelector("body")?.style.setProperty("--bg", backgroundColor);
    document.querySelector("body")?.style.setProperty("--text", textColor);
    document.querySelector("body")?.style.setProperty("--base", base);
  }, [palette, isDarkMode]);
}
