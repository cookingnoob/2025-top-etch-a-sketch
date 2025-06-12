const body = document.querySelector("body");

function elementFactory(typeOfElement, className) {
  const element = document.createElement(`${typeOfElement}`);
  element.classList.add(className);
  body.append(element);
  return element;
}

function createBoard() {
  const container = elementFactory("div", "container");
  Array.apply(null, Array(256)).map((c, index) => {
    const cell = elementFactory("div", "cell");
    container.appendChild(cell);
  });
}

createBoard();
