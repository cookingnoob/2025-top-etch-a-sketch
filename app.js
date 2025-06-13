const body = document.querySelector("body");

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

createBoard(16, 16);

function handleHover(e) {
  const button = e.target;
  button.style.backgroundColor =
    button.style.backgroundColor === "black" ? "white" : "black";
}
