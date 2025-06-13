const body = document.querySelector("body");

const buttonContainer = elementFactory("div", "button-container");
const numberButtonContainer = elementFactory("div", "btn-number-container");
const colorButtonContainer = elementFactory("div", "btn-color-container");
buttonContainer.append(colorButtonContainer, numberButtonContainer);

body.appendChild(buttonContainer);

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
    cell.addEventListener("mouseover", handleHover);
    container.appendChild(cell);
  });
}

function handleHover(e, color1 = "white", color2 = "black") {
  const button = e.target;
  button.style.backgroundColor =
    button.style.backgroundColor === color2 ? color1 : color2;
}

function boardButtons(num, textColor, className, handler) {
  const button = elementFactory("button", className);
  if (num) {
    button.textContent = `${num}x${num}`;
  } else if (textColor) {
    button.textContent = `${textColor}`;
  }
  button.value = num;
  button.addEventListener("click", handleNewBoard);
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

boardButtons(16, "", "button-board", handleNewBoard);
boardButtons(64, "", "button-board", handleNewBoard);
boardButtons(100, "", "button-board", handleNewBoard);
boardButtons(0, "50 Shades of Gray", "button-board", handleNewBoard);
createBoard(16, 16);
