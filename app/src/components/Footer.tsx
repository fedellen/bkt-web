import { Settings } from "../hooks/useSettings";

interface FooterProps {
  settings: Settings;
}
export function Footer({ settings: _s }: FooterProps): JSX.Element {
  // spawn social icons from settings
  return (
    <footer>
      <p>
        <small
          className="
          text-center
          text-muted
        "
        >
          Copyright {new Date().getFullYear()} bonnie k thompson
        </small>
      </p>
    </footer>
  );
}
