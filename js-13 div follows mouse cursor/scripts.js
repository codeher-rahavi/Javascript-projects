let myDiv = document.querySelector(".mover");

function isTouchDiv (){
    try{
        //we try to create TouchEvent for desktops and throw error
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
};

const move = (e) =>{
    //Try, catch to avoid any errors for touch screens(error thrown when user doesnt move his finger)
    try{
        // pageX and pageY returns the position of the clients cusor from the top left of screen
        let x = !isTouchDiv() ? e.pageX : e.touches[0].pageX;

        let y = !isTouchDiv() ? e.pageY : e.touches[0].pageY;

    }
    catch(e){}
        //set left and top of the div on the mouse pointer
        
        myDiv.style.left = x + "px";
        myDiv.style.top = y + "px";
};

document.addEventListener("mousemove",(e) => {
    move(e);
});