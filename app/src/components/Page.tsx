interface PageProps {
    pageContent: JSX.Element;
}

export function Page({ pageContent }: PageProps): JSX.Element {
    return <div className="container">{pageContent}</div>;
}
