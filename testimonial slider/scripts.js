const testimonials=[{
    name:"Eva Swayer",
    job:"CEO,Fashworks",
    image:"image-1.png",
    testimonial:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut, itaque aspernatur mollitia repellat eaque. Dolor hic error atque quidem!"
},
{
    name:"Steve Jobs",
    job:"CEO,Apple",
    image:"image-2.jpeg",
    testimonial:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis aliquid, nobis dolores architecto consectetur. Possimus aliquam sit eveniet praesentium!"
},
{
    name:"Mark Antony",
    job:"Manager,Microsoft",
    image:"image-3.jpg",
    testimonial:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero iste placeat qui ex voluptates aut? Sed libero ipsum laborum"
},
{
    name:"Sivaji",
    job:"Project Head,AvaSsoft",
    image:"image-4.jpeg",
    testimonial:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, porro dolor. A fuga aliquam quos earum minima dolore nulla temporibus!"
}]
let test = document.querySelector('.details');
let nameBox = document.querySelector('.name');
let jobBox = document.querySelector('.job');
let imgContainer = document.querySelector('.img-container');
let prev=document.querySelector('.prev-btn');
let next = document.querySelector('.next-btn');

let i=0;


let displayTestimonials = () =>{
    test.textContent = testimonials[i].testimonial;
    nameBox.textContent = testimonials[i].name;
    jobBox.textContent = testimonials[i].job;
    imgContainer.src = testimonials[i].image;

}
displayTestimonials();

next.addEventListener('click',() =>{
    i=(i+1)%testimonials.length;
    displayTestimonials();
});

prev.addEventListener('click', () =>{
    i=(i-1+testimonials.length) %testimonials.length;
    displayTestimonials();
});

