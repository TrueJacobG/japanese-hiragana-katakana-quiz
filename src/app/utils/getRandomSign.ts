export const getRandomSign = (signs: { [key: string]: string }) => {
  const keys = Object.keys(signs);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomValue = signs[randomKey];
  return [randomKey, randomValue];
};
