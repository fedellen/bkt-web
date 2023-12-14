import { usePalette } from "../hooks/usePalette";
import { useSettings } from "../hooks/useSettings";

interface PageProps {
  pageContent: JSX.Element;
}

export function Page({ pageContent }: PageProps): JSX.Element {
  const settings = useSettings((e) => console.error(e));
  usePalette(settings);

  return (
    <div
      className="container"
      style={{
        backgroundColor: `var(--bg-color)`,
        color: `var(--text-color)`,
      }}
    >
      {pageContent}
    </div>
  );
}
