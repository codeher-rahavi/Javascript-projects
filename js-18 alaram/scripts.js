//initial references
let timerRef = document.querySelector(".timer-Display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const activeAlarms = document.querySelector(".activeAlarms");
const setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio("./alarm.mp3");//built in function in javascript that creates a audio object

let initialHour = 0,
initialMinute = 0,
alarmIndex = 0;


//append zeros for single digit
const appendZero = (value) => (value < 10 ? "0"+value : value.toString());

//search for value in object
const searchObject = (parameter,value) => {
    let alarmObject ,objIndex,exists = false;
    alarmsArray.forEach((alarm,index) =>{
        if(alarm[parameter] === value){
            exists = true;
            alarmObject = alarm;
            objIndex = index ;
        }
    });
    return [exists,alarmObject,objIndex];
};

function displayTimer(){
    let date = new Date();
    let[hours, minute , seconds] =[
        appendZero(date.getHours()),
        appendZero(date.getMinutes()),
        appendZero(date.getSeconds()),
    ];

    //Display time
    timerRef.innerHTML = `${hours}:${minute}:${seconds}`;
    // alarm
    alarmsArray.forEach((alarm, index) =>{
        if(alarm.isActive){
            if(`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minute}`)
            {
                alarmSound.play();
                alarmSound.loop = true; 
            }
        }
    });
}
const InputCheck = (inputValue) => {
    let parsed = parseInt(inputValue);
    if(isNaN(parsed) || parsed<0 || parsed>59){
        return "00";
    }
    return appendZero(parsed);
};

hourInput.addEventListener("input", () =>{
    hourInput.value = InputCheck(hourInput.value);
});
minuteInput.addEventListener("input", () =>{
    minuteInput.value = InputCheck(minuteInput.value);
});

//create alarm div
const createAlarm = (alarmObj) => {
    //keys frrom object
    const {id,alarmHour,alarmMinute} = alarmObj;
    //alarm div
    let alarmDiv = document.createElement("div");
    alarmDiv.classList.add("alarm");
    alarmDiv.setAttribute("data-id",id);
    alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}<span>`;



        //checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.addEventListener("click", (e) => {
        if(e.target.checked){
            startAlarm(e);
        }else{
            stopAlarm(e);
        }
    });
    alarmDiv.appendChild(checkbox);
    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", (e) =>{
        deleteAlarm(e)
    });
    alarmDiv.appendChild(deleteButton);
    activeAlarms.appendChild(alarmDiv);
};


//set alarm
setAlarm.addEventListener("click" ,() =>{
    alarmIndex+=1;
    //alarmobjects
    let alarmObj = {};
    alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
    alarmObj.alarmHour = hourInput.value;
    alarmObj.alarmMinute = minuteInput.value;
    alarmObj.isActive = false;
    console.log(alarmObj);
    alarmsArray.push(alarmObj);
    createAlarm(alarmObj);
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);

});


//start alarm
const startAlarm = (e) => {
    let searchId = e.target.parentElement.getAttribute("data-id");
    let [exists,obj,index]= searchObject("id",searchId);
    if(exists){
        alarmsArray[index].isActive = true;
    }
};

//stop Alarm
const stopAlarm = (e) => {
    let searchId= e.target.parentElement.getAttribute("data-id");
    let[exists,obj,index] = searchObject("id",searchId);
   if(exists){
        alarmsArray[index].isActive = false;
        alarmSound.pause();
    }
};

//delete alarm
const deleteAlarm = (e) =>{
    const alarmElement = e.target.closest(".alarm");
    const searchId = alarmElement.getAttribute("data-id");
    let[exists,obj,index] = searchObject("id",searchId);
    
    if(exists){
       alarmElement.remove();
       alarmsArray.splice(index,1);
    }
}

window.onload = () =>{
    setInterval(displayTimer,1000);
    initialHour = 0;
    initialMinute = 0;
    alarmIndex = 0;
    alarmsArray = []
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);
}