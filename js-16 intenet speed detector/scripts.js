//API link for random images : "https://cataas.com/cat"
let startTime,endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById('bits');
let kbsOutput = document.getElementById('kbs');
let mbsOutput = document.getElementById('mbs');

//generate random image using a link
let imageLink = "https://cataas.com/cat";

//when image loads
image.onload = async function(){
    endTime = new Date().getTime();

    //get image size
    await fetch(imageLink).then((response) =>{
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};
//Function to calculate speed
function calculateSpeed(){
    let timeDuration = (endTime - startTime) / 1000;
    //total bits
    let loadedBits = imageSize * 8;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    let speedInKbps = (speedInBps / 1024).toFixed(2);
    let speedInMbs = (speedInKbps / 1024).toFixed(2);

    bitOutput.innerHTML = `Speed In Bits : ${speedInBps}`;
    kbsOutput.innerHTML = `Speed In Kbs :${speedInKbps}`;
    mbsOutput.innerHTML = `Speed In Mbs :${speedInMbs}`;
}
//Initial
const init = async() => {
    startTime = new Date().getTime();
    image.src = imageLink;
};

window.onload = () => init();