"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getRandomSign } from "./utils/getRandomSign";
import { getPoints, incrementPoints } from "./utils/pointsUtils";
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (input === correctResult) {
        setShowCorrectResult(false);
        if (canGetPoints) {
          const newPoints = incrementPoints(1);
          setPoints(newPoints);
        }
        setCanGetPoints(true);
        prepareNewSign();
      }
    } else if (event.key === "Escape") {
      setShowCorrectResult(true);
      setInput("");
      setCanGetPoints(false);
    }
  };

  return (
    <div className={styles.page}>
      <div>
        <h2>Points: {points}</h2>
        <h1>{alphabet}</h1>
      </div>

      <div className={styles.result}>
        <p>{sign}</p>
        <p className={styles.correctResult}>{showCorrectResult && correctResult}</p>
      </div>

      <div className={styles.inputTextBox}>
        <p className={styles.inputText}>{input}</p>
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Quiz;
