import { incrementPoints } from "./pointsUtils";

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>,
  input: string,
  correctResult: string,
  setShowCorrectResult: (arg: boolean) => void,
  canGetPoints: boolean,
  setPoints: (arg: number) => void,
  setCanGetPoints: (arg: boolean) => void,
  prepareNewSign: () => void,
  setInput: (arg: string) => void
) => {
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
