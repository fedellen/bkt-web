import { Link } from "react-router-dom";
import "./Header.css";
import { Settings } from "../types";
import { spaceToHyphen } from "../utils";

interface HeaderProps {
  settings?: Settings;
}
export function Header({ settings }: HeaderProps) {
  const pageGallerySlugs = settings?.pageGalleries?.map((g) => g.title) ?? [];
  const logoUrl = settings?.logoUrl;
  const siteTitle = settings?.title ?? "bkt";
  return (
    <>
      <span className="disclaimer">
        All artwork © Bonnie K Thompson. No AI scrapping is allowed. To license
        any artwork represented on this website, please contact Bonnie K
        Thompson.
      </span>
      <header>
        <h1>
          <Link to="/">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={siteTitle}
                style={{ maxHeight: `${settings?.maxLogoHeightRem ?? 20}rem` }}
              />
            ) : (
              siteTitle
            )}
          </Link>
        </h1>
        <nav>
          {pageGallerySlugs.map((slug) => (
            <Link key={slug} to={`/${spaceToHyphen(slug)}`}>
              {slug}
            </Link>
          ))}
          {settings?.storeLinks?.map(({ link, headerText }) => (
            <Link key={link} target="_blank" to={link}>
              {headerText}
            </Link>
          ))}
          <Link to="/about">about</Link>
        </nav>
      </header>
    </>
  );
}
