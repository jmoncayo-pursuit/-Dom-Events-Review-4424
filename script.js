let body = document.querySelector('body');
let button = document.querySelector('button');
let index = 0;



button.addEventListener('click', () => {
    let container = document.querySelector(`.container${index}`);
    index++
    const div = document.createElement('div');
    div.setAttribute('class', `container${index}`);
    div.style.border = '1rem solid' + getRandomColor();  
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';

    if(container.clientWidth >= 32) { //2rem ~ 32px
        container.appendChild(div);
        console.log(`container${index}`);
    } else {
      button.disabled = true;
      console.log('button disabled')
    }
});

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
