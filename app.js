const body = document.querySelector("body");

const buttonContainer = elementFactory("div", "button-container");
const numberButtonContainer = elementFactory("div", "btn-number-container");
const colorButtonContainer = elementFactory("div", "btn-color-container");
const colorSwatch = elementFactory("div", "color-swatch");

buttonContainer.append(colorButtonContainer, numberButtonContainer);
colorButtonContainer.append(colorSwatch);
body.append(buttonContainer);

let color1 = "rgb(255, 255,255)";
let color2 = "rgb(0, 0, 0)";
let isBlack = true;
let isGrayScale = false;

colorSwatch.style.background = color2;

function elementFactory(typeOfElement, className) {
  const element = document.createElement(`${typeOfElement}`);
  element.classList.add(className);
  body.append(element);
  return element;
}

function createBoard(rows, cols) {
  const container = elementFactory("div", "container");
  container.style.setProperty("--cols", cols);

  Array.apply(null, Array(rows * cols)).map((c) => {
    const cell = elementFactory("div", "cell");
    cell.addEventListener("mouseover", (e) => handleHover(e, color1, color2));
    container.appendChild(cell);
  });
}

function handleHover(e, color1, color2) {
  const button = e.target;
  if (isGrayScale) {
    handleGrayScale();
  }
  button.style.backgroundColor =
    button.style.backgroundColor === color2 ? color1 : color2;
}

function boardButtons(num, textColor, className, handler) {
  const button = elementFactory("button", className);
  button.textContent = num ? `${num}x${num}` : `${textColor}`;
  button.value = num;
  button.addEventListener("click", handler);

  if (num) {
    numberButtonContainer.appendChild(button);
    return;
  } else {
    colorButtonContainer.appendChild(button);
  }
}

function handleNewBoard(e) {
  const oldBoard = document.querySelector(".container");
  oldBoard.remove();
  createBoard(+e.target.value, +e.target.value);
}

function handleGrayScale() {
  const originalLightValue = color2.split(",")[2].split(")")[0];
  if (+originalLightValue === 100) {
    isBlack = false;
  } else if (+originalLightValue === 0) {
    isBlack = true;
  }
  const newLightValue = isBlack
    ? +originalLightValue + 2
    : +originalLightValue - 2;
  color2 = `rgb(${newLightValue}, ${newLightValue},${newLightValue})`;
  colorSwatch.style.backgroundColor = color2;
}

function toggleGrayScale(e) {
  if (isGrayScale) {
    color2 = "rgb(0, 0,0)";
  }
  isGrayScale = !isGrayScale;
  const button = e.target;
  button.textContent = `${
    isGrayScale ? "Black and White" : "50 Shades of Gray"
  }`;
}

function handleRandomColor() {
  const r = randomNumber(0, 250);
  const g = randomNumber(0, 250);
  const b = randomNumber(0, 250);

  color2 = `rgb(${r}, ${g}, ${b})`;
  colorSwatch.style.background = color2;
}

function randomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

boardButtons(16, "", "button-board", handleNewBoard);
boardButtons(64, "", "button-board", handleNewBoard);
boardButtons(100, "", "button-board", handleNewBoard);
boardButtons(0, "50 Shades of Gray", "button-board", toggleGrayScale);
boardButtons(0, "Random color", "button-board", handleRandomColor);
createBoard(16, 16);
