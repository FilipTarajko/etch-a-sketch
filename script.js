const content = document.querySelector('#content');
const button = document.querySelector('#reset');
const newsize = document.querySelector('#newsize');

function paint(e){
    e.target.classList.add('painted');
}

function resetBoard(){
    squares.forEach((square)=>
    {
        square.classList.remove('painted');
    })
}

function changeSize(){
    removeSquares();
    newBoard(window.prompt("Choose new size (min: 1, max: 100)"));
}

function newBoard(n){
    if(n<1){
        n=1;
    }
    if(n>100){
        n=100;
    }
    content.style.gridTemplateColumns= `repeat(${n}, ${640/n}px)`;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++){
            let square = document.createElement('div');
            square.classList.add('square')
            square.style.height = `${640/n-2}px`;
            square.style.width = `${640/n-2}px`;
            content.appendChild(square);
        }
    }
    squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('mouseover', paint);
    });
}

function removeSquares(){
    squares.forEach((square)=>{
        content.removeChild(square);
    })
}

newBoard(16);

button.addEventListener('click', resetBoard);
newsize.addEventListener('click', changeSize);