import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="disclaimer">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["N", "o", " ", " "]}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t", "s", " ", " "]}
              idx={19}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["T", "o", " ", " "]}
              idx={29}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["D", "a", "t", "e"]}
              idx={33}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
