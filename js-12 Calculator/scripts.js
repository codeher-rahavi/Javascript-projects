let equal_pressed = 0;

//Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll("#input-button");

//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () =>{
    input.value = "";
}

//Access each class using forEach
button_input.forEach((button_class) =>{
    button_class.addEventListener("click",() =>{
        if(equal_pressed === 1){
            input.value = "";
            equal_pressed = 0;
        }

        //display value for each button
        input.value += button_class.value;
    });
});

//solve the users input when clicked on the equal sign
equal.addEventListener("click",()=>{
    equal_pressed = 1;
    let input_value = input.value;

    //Get Last result from local storage
    let lastResult = localStorage.getItem("lastResult");

    //if input starts with the operator , ass last result
    if(/^[\+\-\*\/]/.test(input_value) && lastResult !==null){
        input_value = lastResult+input_value;
    }
    try{
        //evaluate user input
        let solution = eval(input_value);
        //True for natural numbers False for decimals
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
        localStorage.setItem("lastResult",solution);
    }
    catch(err){
    //if user has entered invalid input
    alert("Invalid Input");
    }
});

//clear whole input
clear.addEventListener("click",() =>{
    input.value = "";
});

//Erase single digit
erase.addEventListener("click", () => {
    input.value = input.value.slice(0,input.value.length -1)
});