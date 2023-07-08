var square;
for(i = 0;i<16;i++){
    const board = document.createElement('div');
    board.style['display'] = 'flex';
    board.style['background-color'] = 'coral';
    for( j = 0;j<16;j++){
        square = document.createElement('div');
        // square.style.backgroundColor = 'blue';
        square.classList.add('square')
        square.style.width='20px'
        square.style.height='20px'
        square.style['border'] = '1px solid black';
        // square.style.margin = '10px'
        board.appendChild(square);
    }
    document.querySelector('.container').appendChild(board);
}
const squares = document.querySelectorAll('.square');
const button = document.getElementById('draw');
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

