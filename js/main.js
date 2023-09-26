const CANVAS = document.querySelector('.canvas');
generateGrid(16);
let pixels = createListeners();


function createListeners(){
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', changeBackground);
  });
  return pixels;
}

function changeBackground(pixel) {
  pixel.target.classList.add('color-change')
  console.log(pixel)
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