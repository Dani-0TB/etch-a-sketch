function generateGrid(canvasSize) {
  let tileWidth = canvasSize/gridSize;
  let tileHeight = canvasSize/gridSize;
  canvas.replaceChildren();
  for (let i = 0; i < pixelGrid; i++) {
    let pixel = document.createElement('div');
    pixel.style.backgroundColor = 'black';
    pixel.style.width = `${ tileWidth-2 }px`;
    pixel.style.height = `${ tileHeight-2 }px`
    canvas.appendChild(pixel);
  }
}

let gridSize = 16;
let pixelGrid = Math.pow(gridSize,2);
let canvas = document.querySelector('.canvas');

generateGrid(800);