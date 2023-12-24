import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { useSettings } from "./hooks/useSettings";
import { useCallback } from "react";
import { useErrorMessage } from "./hooks/useErrorMessage";
import { ErrCallback, Image } from "./types";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { pathFromImg } from "./utils/pathFromImg";
import { ImagePage } from "./components/ImagePage";

export function Router() {
  const [errorMessage, setErrorMessage] = useErrorMessage();

  const errorCallback = useCallback<ErrCallback>(
    (err) => {
      setErrorMessage(err);
    },
    [setErrorMessage]
  );

  const settings = useSettings(errorCallback);

  if (!settings) {
    return <p>Loading...</p>;
  }

  const imagePages: Image[] = [];
  if (settings.homeGallery?.images) {
    imagePages.push(...settings.homeGallery.images);
  }
  if (settings.pageGalleries) {
    settings.pageGalleries.forEach((g) => {
      if (g.images) {
        imagePages.push(...g.images);
      }
    });
  }

  return (
    <BrowserRouter basename={`${import.meta.env.BASE_URL}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Page
              errorCallback={errorCallback}
              errorMessage={errorMessage}
              settings={settings}
              pageContent={
                settings?.homeGallery ? (
                  <Gallery gallery={settings?.homeGallery} />
                ) : (
                  <></>
                )
              }
            />
          }
        />

        {settings?.pageGalleries?.map((g) => (
          <Route
            key={g.title}
            path={`/${g.title}`}
            element={
              <Page
                errorCallback={errorCallback}
                errorMessage={errorMessage}
                settings={settings}
                pageContent={<Gallery gallery={g} />}
              />
            }
          />
        ))}

        <Route
          path="/about"
          element={
            <Page
              errorCallback={errorCallback}
              errorMessage={errorMessage}
              settings={settings}
              pageContent={<About aboutText={settings?.about ?? ""} />}
            />
          }
        />

        <Route
          path="*"
          element={
            <Page
              errorCallback={errorCallback}
              errorMessage={errorMessage}
              settings={settings}
              pageContent={<p>404</p>}
            />
          }
        />

        {imagePages.map((i) => (
          <Route
            key={i.url}
            path={i.caption ?? pathFromImg(i)}
            element={
              <Page
                errorCallback={errorCallback}
                errorMessage={errorMessage}
                settings={settings}
                pageContent={<ImagePage image={i} />}
              />
            }
          />
        ))}
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
