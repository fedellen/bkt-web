import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  pageGallerySlugs: string[];
  siteTitle: string;
}
export function Header({ pageGallerySlugs, siteTitle }: HeaderProps) {
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
        <Link to="https://abonbon.bigcartel.com/">stickers</Link>
        <Link to="https://www.inprnt.com/gallery/bonniekt/">prints</Link>
        <Link to="https://ko-fi.com/abonbon/shop">wallpaper</Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
}
