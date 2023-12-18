import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { useSettings } from "./hooks/useSettings";
import { useCallback } from "react";
import { useErrorMessage } from "./hooks/useErrorMessage";
import { ErrCallback } from "./types";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";

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

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
