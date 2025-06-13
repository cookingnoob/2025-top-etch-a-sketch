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

createBoard(101, 101);

function handleHover(e, color1 = "white", color2 = "black") {
  const button = e.target;
  button.style.backgroundColor =
    button.style.backgroundColor === color2 ? color1 : color2;
}
