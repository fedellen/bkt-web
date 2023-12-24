import { Image } from "../types";

export function pathFromImg(image: Image) {
  return image.caption ?? pathFromImgUrl(image.url);
}

function pathFromImgUrl(url: string) {
  return url.split("/").pop()!;
}
