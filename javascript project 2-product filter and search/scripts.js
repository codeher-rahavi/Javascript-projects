let products = {
    data : [
        {
            productName:"Regular White T-shirt",
            category:"topwear",
            price:"30",
            image:"white-shirt.webp",
        },
        {
            productName:"Beige Short skirt",
            category:"bottomwear",
            price:"49",
            image:"short-skirt.jpg"
        },
        {
            productName:"Sporty Smart Watch ",
            category:"Watch",
            price:"99",
            image:"sport-smartwatch.webp"
        },
        {
            productName:"Basic Kintted Top",
            category:"Topwear",
            price:"29",
            image:"knitted-top.jpg"
        },
        {
            productName:"Black Leather Jacket",
            category:"Jacket",
            price:"129",
            image:"black-leather-jacket.webp"
        },
        {
            productName:"Stylish pink Trousers",
            category:"Bottomwear",
            price:"89",
            image:"pink-trousers.webp"
        },
        {
            productName:"Brown Men's Jacket",
            category:"Jacket",
            price:"189",
            image:"brown-jacket.jpg"
        },
        {
            productName:"Comfy Gray Pants",
            category:"Bottomwear",
            price:"49",
            image:"comfy-gray-pants.webp"
        },
    ],
};
//newer way of for loop(for...of)
for(let i of products.data){
//create card
    let card = document.createElement("div");
//card should have category and should be hidden initially
    card.classList.add("card",i.category,"hide");
//img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container")
//img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
//container
    let container = document.createElement("div");
    container.classList.add("container")
//product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    //.toUpperCase of to convert everything to uppercase
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);

//price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (parameter same as category)
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() === button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
});

//select all cards
    let elements = document.querySelectorAll(".card");
// loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if(value === 'all'){
            element.classList.remove("hide");
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                //display elements based on the category 
                element.classList.remove('hide');
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
               
        }
    });
}

//search buttonn click
document.getElementById("Search").addEventListener("click",()=>{
    //initialization
    let searchInput = document.getElementById("Search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card")

    //loop through all elements
    elements.forEach((element, index)=>{
        if (element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add('hide');
        }
    });

});

//initially display all the products this waits till everything is loaded into the page
window.onload = () => {
    filterProduct("all");
};