let letter =  document.querySelector('.result');
let code = document.getElementById('key-code');

function handleKeyDown(event){
    keyPressed = event.key;
    keyCode = event.keyCode;

    letter.innerHTML = keyPressed;
    code.innerHTML = `${keyCode}`;

};

document.addEventListener("keydown",handleKeyDown);