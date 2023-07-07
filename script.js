
for(i = 0;i<16;i++){
    const board = document.createElement('div');
    board.style['display'] = 'flex';
    board.style['background-color'] = 'coral';
    for( j = 0;j<16;j++){
        const square = document.createElement('div');
        // square.style.backgroundColor = 'blue';
        square.style.width='20px'
        square.style.height='20px'
        square.style['border'] = '1px solid black';
        // square.style.margin = '10px'
        board.appendChild(square);
    }
    document.body.appendChild(board);
}
