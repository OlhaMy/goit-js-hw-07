const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", () => {
  const amount = parseInt(refs.input.value);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
    refs.input.value = "";
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});

refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const boxesFragment = document.createDocumentFragment();
  const boxSize = 30;
  const incrementSize = 10;

  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * incrementSize;
    const newDiv = document.createElement("div");

    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.classList.add("box");
    boxesFragment.appendChild(newDiv);
  }
  refs.boxes.appendChild(boxesFragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
