let inputText= document.getElementById('input');
let lengthSize= document.getElementById('length');

inputText.addEventListener("input",()=>{
    l = inputText.value.length;
    if(l<60){
        inputText.style.border ="2px solid black"
        lengthSize.innerHTML=`${l}/60`;
    }
    else if (l>=60){
        lengthSize.innerHTML=`${l}/60`;
        inputText.style.border ="2px solid red"
    }
});