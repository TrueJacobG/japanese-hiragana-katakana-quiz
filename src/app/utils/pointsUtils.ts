import Cookies from "js-cookie";

export const getPoints = () => {
  const points = Cookies.get("points");
  return points ? parseInt(points, 10) : 0;
};

export const incrementPoints = (value = 1) => {
  const currentPoints = getPoints();
  const newPoints = currentPoints + value;
  Cookies.set("points", newPoints.toString(), { expires: 7 });
  return newPoints;
};
