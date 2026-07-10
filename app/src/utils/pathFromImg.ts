import { Image } from "../types";
import { spaceToHyphen } from "./spaceToHyphen";

export function pathFromImg(image: Image) {
  return spaceToHyphen(image.slug ?? pathFromImgUrl(image.url));
}

function pathFromImgUrl(url: string) {
  return url.split("/").pop()!;
}
