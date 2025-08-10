let input = document.getElementById("text-area");
let word=document.getElementById("word-count");
let char=document.getElementById("char-count");

input.addEventListener("input",()=>{
    //counts number of characters
    char.textContent = input.value.length;

    //removes whitespaces form both sides of the string
    let txt  = input.value.trim();

    //splits text at spaces into array of substrings 
    //filter empty string 
    //count lenght of this array
    word.textContent = txt.split(/\s+/).filter((item) => item).length;
});