export function loadFavicon(faviconUrl: string | undefined) {
  let favicon = document.querySelector(
    "link[rel~='icon']"
  ) as HTMLLinkElement | null;
  if (faviconUrl) {
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = faviconUrl;
  }
}
