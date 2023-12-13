import { BrowserRouter, Route, Routes } from "react-router-dom";

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
                <Route
                    path="/about"
                    element={
                        <>
                            <h1>About</h1>
                            <p>Welcome to the about page</p>
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <h1>Contact</h1>
                            <p>Welcome to the contact page</p>
                        </>
                    }
                />
                <Route path="" />

                {/* generate gallery pages based on all galleries from sanity CMS not named `home` */}

                {galleries.map((gallery) => {
                    if (gallery.name === "home") return null;
                    return (
                        <Route
                            key={gallery.name}
                            path={`/${gallery.name}`}
                            element={<body />}
                        />
                    );
                })}

                {/* generate image pages based on all images from all galleries */}

                <Route path="*" element={<p>404</p>} />
            </Routes>
        </BrowserRouter>
    );
}
