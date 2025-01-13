import styles from "../page.module.css";

type Props = {
  points: number;
  alphabet: string;
  sign: string;
  showCorrectResult: boolean;
  correctResult: string;
  input: string;
  setInput: (arg: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Main = ({ points, alphabet, sign, showCorrectResult, correctResult, input, setInput, handleKeyDown }: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h2 className={styles.points}>Points: {points}</h2>
        <h1 className={styles.alphabet}>{alphabet}</h1>
      </div>

      <div className={styles.result}>
        <p className={styles.sign}>{sign}</p>
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

export default Main;
