let imgContainer = document.querySelector('.img-container')
let btn= document.querySelector('.btn');
let text= document.querySelector('.title');
let url = "https://meme-api.com/gimme";
//array of subreddits of your choice
let subreddits = ["catmemes","wholesomememes","dogmemes","me_irl"];
//function to get random meme

let getMeme = () =>{
    //choose a random subreddit frim the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() *4)];
    //fetch data from api
    fetch(url +"/"+ randomSubreddit)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        imgContainer.src=data.url
        text.textContent= data.title;
    })
};
//call the getmeme when clicked
btn.addEventListener('click',getMeme);
getMeme();