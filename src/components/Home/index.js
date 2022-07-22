import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const helloArray1 = ["H", "e", "l", "l", "o", " ", " "];
  const helloArray2 = ["t", "h", "e", "r", "e", ","];
  const introArray = ["I", "'", "m", " ", " "];
  const nameArray = ["M", "a", "n", "t", "a", "s", ","];
  const webArray = ["w", "e", "b", " ", " "];
  const developerArray = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray1}
              idx={10}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray2}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introArray}
              idx={22}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={26}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={webArray}
              idx={33}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={developerArray}
              idx={37}
            />
          </h1>
          <h2>Frontend React Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
