import { Settings } from "../types";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMastodon,
  FaSquare,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  settings: Settings | undefined;
}

export function Footer({ settings }: FooterProps): JSX.Element {
  const author = settings?.author ?? "bonnie k thompson";

  const socialIcons = settings?.socials
    ? Object.entries(settings.socials)
        .filter(([key]) => !key.startsWith("_")) // Exclude keys starting with '_' from sanity object
        .map(([title, url]) => socialIcon(title, url))
    : [];

  if (settings?.email) {
    socialIcons.push(socialIcon("email", `mailto:${settings?.email}`));
  }

  function socialIcon(title: string, url: string): JSX.Element {
    const iconMap: { [key: string]: JSX.Element } = {
      bluesky: (
        <FaSquare
          style={{
            borderRadius: "0.25rem",
            border: "0px",
          }}
        />
      ),
      twitter: <FaTwitter />,
      instagram: <FaInstagram />,
      linkedin: <FaLinkedin />,
      github: <FaGithub />,
      youtube: <FaYoutube />,
      mastodon: <FaMastodon />,
      tumblr: <FaTumblr />,
      email: <FaMailBulk />,
    };

    return (
      <a key={title} href={url} target="_blank" rel="noopener noreferrer">
        {iconMap[title] ?? title}
      </a>
    );
  }

  return (
    <footer>
      <div className="socials">{socialIcons}</div>
      <div className="copyright">
        <p>Copyright {new Date().getFullYear()} &copy;</p>
        <p>{author}</p>
      </div>
    </footer>
  );
}
