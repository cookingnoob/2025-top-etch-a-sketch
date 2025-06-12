const body = document.querySelector("body");

function elementFactory(typeOfElement, className) {
  const element = document.createElement(`${typeOfElement}`);
  element.classList.add(className);

  body.append(element);
}

elementFactory("div", "container");
