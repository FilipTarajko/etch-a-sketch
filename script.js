const content = document.querySelector('#content');
const button = document.querySelector('#reset');

function paint(e){
    e.target.classList.add('painted');
}

function resetBoard(){
    squares.forEach((square)=>
    {
        square.classList.remove('painted');
    })
}

function newBoard(n){
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++){
            let square = document.createElement('div');
            square.classList.add('square')
            content.appendChild(square);
        }
    }
}

newBoard(16);
squares = document.querySelectorAll('.square')
squares.forEach((square)=>{
    square.addEventListener('mouseover', paint);
});

button.addEventListener('click', resetBoard);