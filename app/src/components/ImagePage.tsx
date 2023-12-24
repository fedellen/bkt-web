import { Image } from "../types";
import "./ImagePage.css";

interface ImagePageProps {
  image: Image;
}

export function ImagePage({ image }: ImagePageProps) {
  const { url, alt, caption } = image;

  return (
    <>
      <img alt={alt} key={url} src={url} />
      {caption ? <caption>{caption}</caption> : <></>}
    </>
  );
}
