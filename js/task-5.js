function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyRef = document.querySelector('body');
const spanColorRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');

btnChangeColorRef.addEventListener('click', () =>{
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanColorRef.style.backgroundColor = randomColor;
});




