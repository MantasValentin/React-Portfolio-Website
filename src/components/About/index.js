import "./index.scss";
import AnimatedLetter from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutMeArray = ["A", "b", "o", "u", "t", " "];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2200);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={aboutMeArray}
              idx={15}
            />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={["m", "e"]}
              idx={21}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer located in Lithuania
            looking for a role in an established IT company with the opportunity
            to work with the latest technologies on challenging and diverse
            projects.
          </p>
          <p align="LEFT">
            I enjoy working in a team as it allows me to learn from others and
            get valuable feedback on my work. I don't fear making mistakes or
            taking up leadership positions as I can easily play to everyone's
            skills and weak points.
          </p>
          <p>I know how to work with HTML, CSS, Sass, Git, JS, and ReactJS.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#cd669a" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
