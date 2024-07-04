const refs = {  
input: document.querySelector('#controls input'),
btnCreate: document.querySelector('[data-create]'),
btnDestroy: document.querySelector('[data-destroy]'),
boxes: document.querySelector('#boxes'),
}


refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click',destroyBoxes);





function destroyBoxes() {
  refs.boxes.innerHTML = '';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
