import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  pageGallerySlugs: string[];
  siteTitle: string;
  storeLinks: { link: string; headerText: string }[];
}
export function Header({
  pageGallerySlugs,
  siteTitle,
  storeLinks,
}: HeaderProps) {
  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        {pageGallerySlugs.map((slug) => (
          <Link key={slug} to={`/${slug}`}>
            {slug}
          </Link>
        ))}
        {storeLinks.map(({ link, headerText }) => (
          <Link key={link} target="_blank" to={link}>
            {headerText}
          </Link>
        ))}

        <Link to="/about">about</Link>
      </nav>
    </header>
  );
}
