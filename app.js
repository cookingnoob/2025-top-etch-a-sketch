const body = document.querySelector("body");

function elementFactory(typeOfElement, className) {
  const element = document.createElement(`${typeOfElement}`);
  element.classList.add(className);

  body.append(element);
  return element;
}

function createBoard() {
  const container = elementFactory("div", "container");
  container.textContent = "hola hola";
  console.log(container);
}
createBoard();
