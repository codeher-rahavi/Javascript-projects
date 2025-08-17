let tabs = document.querySelectorAll(".tabs h3");
let tabContent = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContent.forEach((content) => {
            content.classList.remove("block");
            content.classList.add("hidden");   
        });
        tabs.forEach(tab => {
            tab.classList.remove("bg-white", "text-[#4d5bf9]"); 
        });
        tab.classList.add("bg-white","text-[#4d5bf9]")
        tabContent[index].classList.add("block");
        tabContent[index].classList.remove("hidden");
    });
});
