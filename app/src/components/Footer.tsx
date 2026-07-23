import { Settings } from "../types";

import "./Footer.css";
import { SocialIcon } from "./SocialIcon";

interface FooterProps {
  settings: Settings | undefined;
}

export function Footer({ settings }: FooterProps): JSX.Element {
  const author = settings?.author ?? "bonnie k thompson";

  const socialIcons = settings?.socials
    ? Object.entries(settings.socials)
        .filter(([key]) => !key.startsWith("_")) // Exclude keys starting with '_' from sanity object
        .map(([title, url]) => (
          <SocialIcon
            title={title}
            url={title === "email" ? `mailto:${url}` : url}
          />
        ))
    : [];

  return (
    <>
      <footer>
        <div className="socials">{socialIcons}</div>
        <ul className="copyright">
          <li className="version">v {import.meta.env.PACKAGE_VERSION}</li>
          <li>copyright {new Date().getFullYear()} &copy;</li>
          <li>{author}</li>
        </ul>
      </footer>
      <span className="disclaimer">
        All artwork © Bonnie K Thompson. No AI scrapping is allowed. To license
        any artwork represented on this website, please contact Bonnie K
        Thompson.
      </span>
    </>
  );
}
