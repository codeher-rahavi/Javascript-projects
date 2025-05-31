const btn = document.querySelector(".container");

let randomNum = () => {
    return Math.floor(Math.random () * 256);
};

let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
}
btn.addEventListener("click",changeColor);

