let btn=document.getElementById('btn');
let locationDiv = document.getElementById('locationBox');

btn.addEventListener("click",() => {
    //geolocation API is used to get the geographical
    // position of a user  and is available inside the navigator object.
    if(navigator.geolocation){
        //returns position(lattitude and longitude) or error
        navigator.geolocation.getCurrentPosition(showLocation, checkError);
    }
    else{
        //for old browser i.e IE
        locationDiv.innerText = "The browser does not support geolocation";
    }
});
//Error Checks
const checkError = (error) => {
    switch(error.code){
        case error.PERMISSION_DENIED:
            locationDiv.innerText = "Please allow access to location";
            break;
        case error.POSITION_UNAVAILABLE:
            locationDiv.innerText = "Location information unavailable";
            break;
        case error.TIMEOUT:
            locationDiv.innerText = "The request to get user's location timed out.";
    }
};

const showLocation = async(position) => {
    //we use the Nominatim API for getting actual
    //  address from lattitude and longitude 

    let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);

    //store response object
    let data = await response.json();
    console.log(data.address);
    locationDiv.innerText = `${data.address.state}, ${data.address.country}`;
}