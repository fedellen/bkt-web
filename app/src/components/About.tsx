interface AboutProps {
  aboutText: string;
}

export function About({ aboutText }: AboutProps) {
  return (
    <>
      <h1>About</h1>
      <p>{aboutText}</p>
    </>
  );
}
