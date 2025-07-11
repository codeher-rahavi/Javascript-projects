function getRandomColor(){
    const colors = [
        "#ff2525",
        "#ffeb3b",
        "#4caf50",
        "#03a9f4",
        "#ff9800",
        "#e91e63",
        "#00e676"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
function createConfetti(x,y){
    const confetticount = 100;
    const radius = 200;
    for(let i=0; i<confetticount; i++){
        const angle = (2 * Math.PI *i) / confetticount;
        const xDirection = Math.cos(angle) * radius;
        const yDirection = Math.sin(angle) * radius;

        const confetti = document.createElement('div');
        confetti.classList.add("confetti");

        confetti.style.width = `${Math.random() *6 +4}px`;
        confetti.style.height = confetti.style.width;

        confetti.style.backgroundColor = getRandomColor();
        confetti.style.top = `${y}px`;
        confetti.style.left = `${x}px`;
        confetti.style.setProperty("--x",`${xDirection}px`);
        confetti.style.setProperty("--y",`${yDirection}px`);
        confetti.style.animation = `burst ${Math.random() * 1.5 + 0.15}s ease-out forwards`;
        
        document.body.appendChild(confetti);
        setTimeout(()=>{
            confetti.remove();
        },3000);
    }
}

document.body.addEventListener("click", (e) =>{
    createConfetti(e.pageX,e.pageY);
});