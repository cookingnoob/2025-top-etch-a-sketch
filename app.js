const body = document.querySelector("body");

function elementFactory(typeOfElement, className) {
  const element = document.createElement(`${typeOfElement}`);
  element.classList.add(className);
  body.append(element);
  return element;
}

function createBoard() {
  const container = elementFactory("div", "container");
  Array.apply(null, Array(256)).map((c) => {
    const cell = elementFactory("div", "cell");
    cell.addEventListener("mouseover", handleHover);
    container.appendChild(cell);
  });
}

createBoard();

function handleHover(e) {
  const button = e.target;
  button.classList.toggle(".hovered");
}
