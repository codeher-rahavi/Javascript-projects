document.querySelector('#addButton').onclick = function() {
    if (document.querySelector('#newtaskinput').value.length === 0){
        alert("please enter a task");
    }
    else{
        document.querySelector('#taskDisplay').innerHTML +=`
            <div class=tasksDisplay>
                <span>
                    ${document.querySelector('#container input').value}
                </span> 
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        
        `

        let deleteTask = document.querySelectorAll('.delete');
        for (let i=0;i<deleteTask.length;i++){
            deleteTask[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        let comp = document.querySelectorAll('.tasksDisplay');
        for(let i=0;i<comp.length;i++){
            comp[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }


        document.querySelector('#container input').value = '';
    }
}
   