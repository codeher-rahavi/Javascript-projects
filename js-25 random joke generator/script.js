let Box = document.getElementById('jokeBox');
let button = document.getElementById('btn');
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(items =>{
        Box.textContent = `${items.joke}`;
    });
   
}
button.addEventListener("click",getJoke);
getJoke();