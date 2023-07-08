const rgb = document.getElementById('rgb');
const clear = document.getElementById('clear');
const container =document.querySelector('.container'); 
const change = document.getElementById('change');
const board = document.createElement('div');

window.onload = ()=>{
  board.classList.add('board')
  changeGrids(16);
  container.appendChild(board);
}

rgb.addEventListener('click',()=>{
  rgb.classList.toggle('random');
})
function getRandomHexCode() {
  var hexCode = '#';
  var characters = '0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}



clear.addEventListener('click',()=>{
  const squares = document.querySelectorAll('.square')
  squares.forEach((square)=>{
    square.style.backgroundColor="";
  })
})


board.addEventListener('mousedown', (e) => {
  e.preventDefault();
  board.classList.add('draww');
});

board.addEventListener('mouseup', () => {
  board.classList.remove('draww');
});





change.addEventListener('click',()=>{
  try{
  const a = prompt('Enter the no of grids in the pad?');
  if (a == null)return;
  if(a<100 && !isNaN(a)) changeGrids(a);
  else throw Error();
  }
  catch{
    alert('Please enter a valid number!');
  }
})


async function changeGrids(a) {
  const boardSize = 480; // Total width/height of the board
  const squareSize = boardSize / a;
  board.innerHTML = "";

  for (let i = 0; i < a; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < a; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      // square.style.border = '1px solid black';
      row.appendChild(square);
    }

    board.appendChild(row);
    await new Promise(resolve => setTimeout(resolve)); // Wait for the row to be appended
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {

    square.addEventListener('mouseover', (event) => {
      if(board.classList.contains('draww') && rgb.classList.contains('random')){
        square.style.backgroundColor = getRandomHexCode();
      }
      else if (board.classList.contains('draww')) {
        color = document.querySelector('#picker').value;
        square.style.backgroundColor = color;
      }
    });
  });
}
