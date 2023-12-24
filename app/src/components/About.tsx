import "./About.css";

interface AboutProps {
  aboutText: string;
}

export function About({ aboutText }: AboutProps) {
  return <p className="about">{aboutText}</p>;
}
