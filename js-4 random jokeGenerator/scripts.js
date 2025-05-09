const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)//fetches the url
    .then(data => data.json())//converts the raw data to actual javascript data (commonly used in web API's)
    .then(item =>{          //the item stores the value 'data' and that is used to access the the joke attribute in the object
        jokeContainer.textContent = `${item.joke}`;//inserting the 'joke'stored in the object using item.joke
    });
}
btn.addEventListener("click",getJoke);
getJoke();