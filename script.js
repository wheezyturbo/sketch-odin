const board = document.createElement('div');
board.classList.add('board')
var square;
for(i = 0;i<16;i++){
    const row = document.createElement('div');
    row.style['display'] = 'flex';
    row.style['background-color'] = 'coral';
    row.classList.add('.row')
    for( j = 0;j<16;j++){
        square = document.createElement('div');
        // square.style.backgroundColor = 'blue';
        square.classList.add('square')
        square.style.width='20px'
        square.style.height='20px'
        square.style['border'] = '1px solid black';
        // square.style.margin = '10px'
        row.appendChild(square);
    }
    board.appendChild(row);
  }
document.querySelector('.container').appendChild(board);
const squares = document.querySelectorAll('.square');
const button = document.getElementById('draw');
const clear = document.getElementById('clear');

clear.addEventListener('click',()=>{
  squares.forEach((square)=>{
    square.style.backgroundColor="";
  })
  button.classList.remove('active');
})

button.addEventListener('click',()=>{
  button.classList.toggle('active');
})

squares.forEach((square) => {

  square.addEventListener('mouseover', () => {
    if(button.classList.contains('active')){
      square.style.backgroundColor = 'red'; // Change the color when hovered over after clicking
    }
  });
});

