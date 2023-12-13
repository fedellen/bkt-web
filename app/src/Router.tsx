import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";

const settings = {
  // TODO: more settings, get from sanity CMS
  homeGallery: {
    name: "home",
    description: "This is the first gallery",
    images: [
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 1",
      },
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 2",
      },
    ],
  },
};

// TODO: Replace this with data from sanity CMS
const galleries = [
  {
    name: "illustrations",
    description: "This is the second gallery",
    images: [
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 3",
      },
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 4",
      },
    ],
  },

  {
    name: "animations",
    description: "This is the third gallery",
    images: [
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 5",
      },
      {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder image 6",
      },
    ],
  },
];

export function Router() {
  // change the favicon
  const favicon = document.querySelector(
    "link[rel~='icon']"
  ) as HTMLLinkElement | null;
  if (favicon) {
    favicon.href = "https://stackoverflow.com/favicon.ico";
  }

  return (
    <BrowserRouter basename={`${import.meta.env.BASE_URL}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Page
              pageContent={
                <>
                  <h1>Home</h1>
                  <p>Welcome to the home page</p>
                  <section>
                    <ul>
                      {settings.homeGallery.images.map((i) => (
                        <li key={i.src}>
                          <img src={i.src} alt={i.alt} />
                        </li>
                      ))}
                    </ul>
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
              pageContent={
                <>
                  <h1>Contact</h1>
                  <p>Welcome to the contact page</p>
                </>
              }
            />
          }
        />
        <Route path="*" element={<Page pageContent={<p>404</p>} />} />

        {galleries.map((gallery) => {
          if (gallery.name === "home") return null;
          return (
            <Route
              key={gallery.name}
              path={`/${gallery.name}`}
              element={
                <Page
                  pageContent={
                    <>
                      <h1>{gallery.name}</h1>
                      <p>{gallery.description}</p>
                      <section>
                        <ul>
                          {gallery.images.map((i) => (
                            <li key={i.src}>
                              <img src={i.src} alt={i.alt} />
                            </li>
                          ))}
                        </ul>
                      </section>
                    </>
                  }
                />
              }
            />
          );
        })}

        {/* generate image pages based on all images from all galleries */}

        {galleries.flatMap((gallery) =>
          gallery.images.map((image) => (
            <Route
              key={image.src}
              // TODO: use a better path, this unfolds https path in completeness.
              //  Use a title instead or get a slug from sanity CMS
              path={`/${gallery.name}/${image.src}`}
              element={
                <Page
                  pageContent={
                    <>
                      <h1>{image.alt}</h1>
                      <img src={image.src} alt={image.alt} />
                    </>
                  }
                />
              }
            />
          ))
        )}

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
