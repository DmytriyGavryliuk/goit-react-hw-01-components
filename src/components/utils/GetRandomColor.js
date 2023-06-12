    export const getRandomDarkHexColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}deg, 75%, 25%)`;
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}