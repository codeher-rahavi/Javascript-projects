//Selecting the eye div
let eye_ref = document.querySelectorAll('.eye');//this is a nodelist containing both the eyes so it should be accessed using an array


//mousemove for the device with the mouse and touchmove for the touchscreen devices

let events = ["mousemove","touchmove"]

//check for touch event
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}

//same function for both the events

events.forEach((eventType) => {
    document.body.addEventListener(eventType,
    (event) => {
        eye_ref.forEach((eye) => {
            /*getBoundingclientsRect()  method returns the 
            position relative to the viewport*/
            let eyeX = eye.getBoundingClientRect().left +eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top +eye.clientWidth / 2;

            /* clientX and clientY returm the position \
            of the clients cursor from the top left of the screen*/

            let  x=!isTouchDevice()? event.clientX : event.touches[0].clientX;
            let y = !isTouchDevice()? event.clientY : event.touches[0].clientY;
      
        /*
        subtract x position of the mouse from the x position of the eye  and 
        y position from the y position of the eye
        use atan(return angle in radians) */

        let radian = Math.atan2( x-eyeX , y-eyeY);
        //convert radian to degree
        let rotationDegree = radian * (180 / Math.PI) * -1 + 180;
        // rotate the eye
        eye_ref.style.transform  = "rotate(" + rotationDegree + "deg)";
        });
    });
});