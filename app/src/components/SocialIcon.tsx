import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaMastodon,
  FaTumblr,
  FaMailBulk,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

interface SocialIconProps {
  title: string;
  url: string;
}

export function SocialIcon({ title, url }: SocialIconProps): JSX.Element {
  const iconMap: { [key: string]: JSX.Element } = {
    bluesky: <FaBluesky />,
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
