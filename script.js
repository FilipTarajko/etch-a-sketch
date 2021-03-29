const content = document.querySelector('#content');

for(i=0;i<16;i++)
{
    for(j=0;j<16;j++){
        let square = document.createElement('div');
        square.classList.add('square')
        content.appendChild(square);
    }
}