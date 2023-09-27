const CANVAS = document.querySelector('.canvas');
let buttons = document.querySelectorAll('.btn');
let menu = [resizeCanvas, clearCanvas];
let pixels;
let gridSize = 16;
init(gridSize);

buttons.forEach((button, index) => {
  button.addEventListener('click', menu[index])
});

function resizeCanvas() {
  let newGridSize;
  while (true) {
    newGridSize = prompt('What size grid do you want?');
    if (newGridSize === null){
      return;
    }
    if (newGridSize > 0 && newGridSize  < 101) {
      break;
    }
    if (typeof newGridSize !== 'number') {
      alert("Invalid input... Please insert numbers");
      continue;
    }

    alert(`Invalid input... The size of the grid has to 
          be between 1 and 100...`);
  }

  gridSize = Math.floor(newGridSize);

  init(gridSize);
}

function clearCanvas() {
  init(gridSize);
}

function createListeners(){
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', changeBackground);
  });
  return pixels;
}

function changeBackground(pixel) {
  pixel.target.classList.add('color-change');
}

function init(size) {
  generateGrid(size);
  pixels = createListeners();
}

function generateGrid(size) {
  CANVAS.replaceChildren();
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
    CANVAS.appendChild(row);
  }
}