import { Image } from "../types";

export function pathFromImg(image: Image) {
  return (image.slug ?? pathFromImgUrl(image.url)).replace(/\s+/g, "-");
}

function pathFromImgUrl(url: string) {
  return url.split("/").pop()!;
}
