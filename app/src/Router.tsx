import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { useSettings } from "./hooks/useSettings";
import { useCallback } from "react";
import { useErrorMessage } from "./hooks/useErrorMessage";
import { ErrCallback } from "./types";

export function Router() {
  const [errorMessage, setErrorMessage] = useErrorMessage();

  const errorCallback = useCallback<ErrCallback>(
    (err) => {
      setErrorMessage(err);
    },
    [setErrorMessage]
  );

  const settings = useSettings(errorCallback);
  console.log("settings", settings);

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
                <>
                  <h1>Home</h1>
                  <p>Welcome to the home page</p>
                  <section className="gallery">
                    {settings?.homeGallery?.images.map((i) => (
                      <img key={i.url} src={i.url} alt={i.alt} />
                    ))}
                    <ul></ul>
                  </section>
                </>
              }
            />
          }
        />
        <Route
          path="/about"
          element={
            <Page
              errorCallback={errorCallback}
              errorMessage={errorMessage}
              settings={settings}
              pageContent={
                <>
                  <h1>About</h1>
                  <p>Welcome to the about page</p>
                </>
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Page
              errorCallback={errorCallback}
              errorMessage={errorMessage}
              settings={settings}
              pageContent={
                <>
                  <h1>Contact</h1>
                  <p>Welcome to the contact page</p>
                </>
              }
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
