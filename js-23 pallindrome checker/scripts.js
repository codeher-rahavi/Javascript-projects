document.getElementById("btn").addEventListener("click", () =>{
    let txt = document.getElementById("input-text").value;
    checkPallindrome(txt);
});

document.getElementById("input-text").addEventListener('keydown',(e) =>{
    let txt = document.getElementById("input-text").value;
    if(e.key ==='Enter'){
        checkPallindrome(txt);
    }
});


function checkPallindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halflen = Math.floor(len/2);
    let result = document.getElementById("result");
    let i;

    for(i=0;i<halflen;i++){
        if(txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "Nope! Not a pallindrome";
            return;
        }
        result.textContent = "Yes! It it's a Pallindrome";
    }
} 
