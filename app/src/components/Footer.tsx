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
        .map(([title, url]) => <SocialIcon title={title} url={url} />)
    : [];

  if (settings?.email) {
    socialIcons.push(
      <SocialIcon title="email" url={`mailto:${settings?.email}`} />
    );
  }

  return (
    <footer>
      <div className="socials">{socialIcons}</div>
      <ul className="copyright">
        <li>v {import.meta.env.PACKAGE_VERSION}</li>
        <li>copyright {new Date().getFullYear()} &copy;</li>
        <li>{author}</li>
      </ul>
    </footer>
  );
}
