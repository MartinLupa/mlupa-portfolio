import { ImagesCarousel } from "../ImagesCarousel/ImagesCarousel";
import "./AboutMe.css";
export const AboutMe = () => {
  return (
    <>
      <div className="spacing-bar__long"></div>
      <h2>About Me</h2>
      <div className="aboutme-container">
        <p className="aboutme-description">
          Hi! My name is Martín and I am originally from Argentina, but had been
          living in Europe since 2019. I first moved to Copenhagen where I lived
          for 2 and a half years, and I am now living in Málaga. <br />
          My experience in Denmark was incredible. There I was able to both work
          in different areas while keep on studying, and is where I decided to
          make a career change into IT to have better personal and professional
          opportunities. <br />I have always had a big curiosity, which took me
          to do my secondary studies in a technical school, where I learnt
          thermodynamics, fluid mechanics, engineering mathematics and even
          engine mechanics, as well as graduating as a Chartered Public
          Accountant. <br />
          That same interest took me to start playing with Arduino and Python,
          and later on specialize on Front-end Web Development with React. I can
          definitely say this was one, nor "the", best decision I have ever take
          and has me completely motivated to keep on learning daily.
        </p>

        <div className="aboutme-carousel">
          <ImagesCarousel />
        </div>
      </div>
    </>
  );
};
