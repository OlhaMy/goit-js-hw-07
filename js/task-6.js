const refs = {  
input: document.querySelector('#controls input'),
btnCreate: document.querySelector('[data-create]'),
btnDestroy: document.querySelector('[data-destroy]'),
boxes: document.querySelector('#boxes'),
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
