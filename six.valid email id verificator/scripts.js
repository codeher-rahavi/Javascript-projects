let email = document.getElementById('input');
let errorMsg = document.getElementById("error-msg");
let icon=document.getElementById("icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


function checker(){
    icon.style.display = "inline-block";
    if(email.value.match(mailRegex)){
        icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        icon.style.color="#2ecc71"   
        errorMsg.style.display= "none";
    }
    else if(email.value == ""){
        icon.style.display="none";
        icon.style.color="#ff2851";
        errorMsg.style.display= "none";
    }
    else{
        icon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
        errorMsg.style.display= "block";
    }
}
email.addEventListener("input",checker);
checker();