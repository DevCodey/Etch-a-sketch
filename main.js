
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.querySelector("#submit");
  submit.addEventListener('click', () => {
    const color = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    createGrid(size);

  });
});
function createGrid(size) {
  const sketchpad = document.querySelector('#sketchpad');
  sketchpad.innerHTML = ''; // Clear previous grid

  const squareSize = 100 / size; // Calculate size of each square in percentage
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.flexBasis = `${squareSize}%`;
    square.style.aspectRatio = '1 / 1'; // Maintain square shape
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = document.querySelector('#color').value;
    });
    sketchpad.appendChild(square);
  }
}