let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptbuttons = document.querySelectorAll('.script');


// list of fontlist

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"
]
//initial Settings

const initializer = () => {
    //function calls for highlighting buttons
    //no highlights for link,unlink,list,undo,redo since they are one time operation
    highlighter(alignButtons,true);
    highlighter(spacingButtons,true);
    highlighter(formatButtons,false);
    highlighter(scriptbuttons,true);

    //create options for font name

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    //fontsize allows only till 7
    for (let i=1 ; i<=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    //default fontsize 
    fontSizeRef = 3;
};

 //main logoc
 const modifyText = (command , defaultUi , value) => {
    document.execCommand(command,defaultUi,value);
 };


 //for basic operatuon which we dont need
optionsButtons.forEach((button) =>{
    button.addEventListener("click", () => {
        modifyText(button.id,false,null);
    })
});

//options that require value parameter eg:colore,fonts
advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id,false,button.value);
    });
});

//linkB
linkButton.addEventListener("click",()=>{
    let userLink = prompt("enter a URL");
    // link has http then pass directly else add https 
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    }
    else{
        userLink = "http://"+userLink;
        modifyText(linkButton.id,false,userLink);
    }
});

//highlight clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) =>{
        button.addEventListener("click", ()=>{
            //needsRemoval = true means only that button should be highlighted and the other would be normal
            if (needsRemoval){
                let alreadyActive = false;

                //if currently clicked button is already active 
                if (button.classList.contains("active")){
                    alreadyActive = true;
                }

                //Remove hightlight form other buttons
                highlighterRemove(className);

                if(!alreadyActive){
                    //highlight clicked button
                    button.classList.add("active");
                }
            }
            else{
                //if other buttons can be highlighted
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemove = (className) => {
    className.forEach((button)  => {
        button.classList.remove("active");
    });
}

window.onload = initializer;