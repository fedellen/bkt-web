import { ErrCallback, Settings } from "../types";
import { Footer } from "./Footer";

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
    <div
      className="page"
      style={{
        backgroundColor: `var(--bg-color)`,
        color: `var(--text-color)`,
      }}
    >
      {errorMessage ? <p>{errorMessage}</p> : null}
      {pageContent}
      <Footer settings={settings} />
    </div>
  );
}
