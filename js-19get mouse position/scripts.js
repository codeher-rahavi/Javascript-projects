let xValue = document.getElementById("xposValue");
let yValue = document.getElementById("yposValue");

function isTouch(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
    
};
const ans = (e) => {
    try{
        var x = !isTouch() ? e.pageX : e.touches[0].pageX;
        var y = !isTouch() ? e.pageY : e.touches[0].pageY;
    }
    catch{}
    
    xValue.innerHTML = x+"px";
    yValue.innerHTML = y+"px";
};

document.addEventListener("mousemove" , (e) => {
    ans(e);
});
