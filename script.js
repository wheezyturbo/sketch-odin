const board = document.createElement('div');
const button = document.getElementById('draw');
const clear = document.getElementById('clear');
const container =document.querySelector('.container'); 
const change = document.getElementById('change');

board.classList.add('board')
changeGrids(16);
container.appendChild(board);


clear.addEventListener('click',()=>{
  const squares = document.querySelectorAll('.square')
  squares.forEach((square)=>{
    square.style.backgroundColor="";
  })
  button.classList.remove('active');
})

button.addEventListener('click',()=>{
  button.classList.toggle('active');
})



change.addEventListener('click',()=>{
  try{
  const a = prompt('Enter the no of grids in the pad?');
  if(a<100 && !isNaN(a)) changeGrids(a);
  else throw Error();
  }
  catch{
    alert('Please enter a valid number!');
  }
})


function changeGrids(a) {
  const boardSize = 480; //since i put the height and width as 480 px in the css
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
      square.style.border = '1px solid black';
      row.appendChild(square);
    }

    board.appendChild(row);
  }

  const button = document.querySelector('#draw');
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      if (button.classList.contains('active')) {
        square.style.backgroundColor = 'red';
      }
    });
  });
}
