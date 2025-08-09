let btn=document.getElementById('btn');
let quote = document.getElementById('quote-box');
let author = document.getElementById('name');

let getQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes",{
        method:'GET',
        headers:{
            'X-Api-Key' :'CUnl/QpamOjdrDvvqiS86Q==PxnGYnxHKlQPLavk'
        }
    })
    .then(data => data.json())
    .then(items =>{
        quote.textContent = `${items[0].quote}`;
        author.textContent=`${items[0].author}`;

    });  
}

btn.addEventListener("click",getQuote);
getQuote();
