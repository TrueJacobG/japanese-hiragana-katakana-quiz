"use client";

import { useEffect, useState } from "react";
import Main from "./components/main";
import { getRandomSign } from "./utils/getRandomSign";
import { handleKeyDown } from "./utils/handleKeyDown";
import { getPoints } from "./utils/pointsUtils";
import { HIRAGANA, KATAKANA } from "./utils/symbols";

const Quiz = () => {
  const [input, setInput] = useState<string>("");
  const [showCorrectResult, setShowCorrectResult] = useState<boolean>(false);
  const [correctResult, setCorrectResult] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [alphabet, setAlphabet] = useState<string>("");
  const [points, setPoints] = useState(getPoints());
  const [canGetPoints, setCanGetPoints] = useState<boolean>(true);

  useEffect(() => {
    prepareNewSign();
  }, []);

  const prepareNewSign = () => {
    const [resultHiragana, signHiragana] = getRandomSign(HIRAGANA);
    const [resultKatakana, signKatakana] = getRandomSign(KATAKANA);

    let [result, sign, alphabet] = ["", "", ""];
    if (Math.floor(Math.random() * 2) == 1) {
      result = resultHiragana;
      sign = signHiragana;
      alphabet = "HIRAGANA";
    } else {
      result = resultKatakana;
      sign = signKatakana;
      alphabet = "KATAKANA";
    }
    setCorrectResult(result);
    setSign(sign);
    setAlphabet(alphabet);
    setInput("");
  };

  return (
    <Main
      points={points}
      alphabet={alphabet}
      sign={sign}
      showCorrectResult={showCorrectResult}
      correctResult={correctResult}
      input={input}
      setInput={setInput}
      handleKeyDown={(event) =>
        handleKeyDown(event, input, correctResult, setShowCorrectResult, canGetPoints, setPoints, setCanGetPoints, prepareNewSign, setInput)
      }
    />
  );
};

export default Quiz;
