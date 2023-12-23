import { ErrCallback, Settings } from "../types";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps {
  pageContent: JSX.Element;
  settings: Settings | undefined;
  errorCallback: ErrCallback;
  errorMessage: string | undefined;
}

export function Page({
  pageContent,
  settings,
  errorMessage,
}: PageProps): JSX.Element {
  return (
    <>
      <Header
        siteTitle={settings?.title ?? "bkt"}
        pageGallerySlugs={["illustrations", "sketches", "animations"]}
      />
      {errorMessage ? <p>{errorMessage}</p> : null}
      {pageContent}
      <Footer settings={settings} />
    </>
  );
}
