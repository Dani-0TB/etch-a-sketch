const CANVAS = document.querySelector('.canvas');
let pixels;
let gridSize = 16;
init(gridSize);



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

function generateGrid(gridSize) {
  CANVAS.replaceChildren();
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
    CANVAS.appendChild(row);
  }
}