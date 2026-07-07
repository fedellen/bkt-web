import { AboutPage } from "../types";
import "./About.css";

interface AboutProps {
  aboutPage: AboutPage;
}

export function About({ aboutPage }: AboutProps) {
  return (
    <section className="about">
      {aboutPage.optionalTopImageUrl && (
        <img src={aboutPage.optionalTopImageUrl} alt="" />
      )}
      {aboutPage.blerbOne && <p>{aboutPage.blerbOne}</p>}
      {aboutPage.optionalMiddleImageUrl && (
        <img src={aboutPage.optionalMiddleImageUrl} alt="" />
      )}
      {aboutPage.blerbTwo && <p>{aboutPage.blerbTwo}</p>}
      {aboutPage.optionalSecondMiddleImageUrl && (
        <img src={aboutPage.optionalSecondMiddleImageUrl} alt="" />
      )}
      {aboutPage.blerbThree && <p>{aboutPage.blerbThree}</p>}
      {aboutPage.optionalBottomImageUrl && (
        <img src={aboutPage.optionalBottomImageUrl} alt="" />
      )}
    </section>
  );
}
