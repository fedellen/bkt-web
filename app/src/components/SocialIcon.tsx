import {
  FaSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaMastodon,
  FaTumblr,
  FaMailBulk,
} from "react-icons/fa";

interface SocialIconProps {
  title: string;
  url: string;
}

export function SocialIcon({ title, url }: SocialIconProps): JSX.Element {
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
