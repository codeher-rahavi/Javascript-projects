let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container img");
let getUserBtn = document.getElementById("get-user-btn");


let user = () => {
    fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data =>{
        let name=data.results[0].name
        let location = data.results[0].location
        let email = data.results[0].email
        if(imgContainer){
                imgContainer.src = `https://robohash.org/${data.results[0].name.first}?set=set2&size=200x200`;
        }
        details.innerHTML =`
        <h3 class="text-2xl font-semibold">${name.first} ${name.last}</h3>
        <p class="text-gray">${email}</p>
        <p class="text-gray"><i class="fa-solid fa-location-dot text-theme "></i> ${location.state}${','} ${location.country}</p>`
        let randomColor = "#" + ((Math.random() * 0xffffff) <<0).toString(16).padStart(6,"0");  
        document.documentElement.style.setProperty("--color-theme",randomColor);
    });
}
getUserBtn.addEventListener("click",user);
user();