document.addEventListener('DOMContentLoaded', ()=>{
  let submit = document.querySelector(".submit");
  
  submit.addEventListener('click', ()=>{
    const sketchpad = document.querySelector("#sketchpad");
    const size = document.querySelector('#size');
    const gridSize = Math.pow(Number(size.value), 2);
    for (let i = 0; i <= gridSize; i++) {
      const square = document.createElement('div');
      square.classList = 'grid-square';
      sketchpad.appendChild(square);
    }
  })
});



