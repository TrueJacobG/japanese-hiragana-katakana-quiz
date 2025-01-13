"use client";

import { useEffect, useState } from "react";
import Main from "../components/main";
import { getRandomSign } from "../utils/getRandomSign";
import { getPoints, incrementPoints } from "../utils/pointsUtils";
import { KATAKANA } from "../utils/symbols";

const Quiz = () => {
  const [input, setInput] = useState<string>("");
  const [showCorrectResult, setShowCorrectResult] = useState<boolean>(false);
  const [correctResult, setCorrectResult] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [points, setPoints] = useState(getPoints());
  const [canGetPoints, setCanGetPoints] = useState<boolean>(true);

  useEffect(() => {
    prepareNewSign();
  }, []);

  const prepareNewSign = () => {
    const [result, sign] = getRandomSign(KATAKANA);
    setCorrectResult(result);
    setSign(sign);
    setInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (input === correctResult) {
        setShowCorrectResult(false);
        if (canGetPoints) {
          const newPoints = incrementPoints(1);
          setPoints(newPoints);
        }
        prepareNewSign();
      }
    } else if (event.key === "Escape") {
      setShowCorrectResult(true);
      setInput("");
      setCanGetPoints(false);
    }
  };

  return (
    <Main
      points={points}
      alphabet={"Katakana"}
      sign={sign}
      showCorrectResult={showCorrectResult}
      correctResult={correctResult}
      input={input}
      setInput={setInput}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default Quiz;
