import { useState } from "react";
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [animated, setAnimated] = useState(false);
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          onMouseEnter={() => setAnimated(() => true)}
          onAnimationEnd={() => setAnimated(() => false)}
          key={char + i}
          className={
            animated
              ? `${letterClass} _${i + idx} animated`
              : `${letterClass} _${i + idx}`
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
