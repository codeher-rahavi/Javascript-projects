document.querySelector('#push').onclick= function(){
    if(document.querySelector('#newtask input').value.length === 0){
        alert("Please Enter a task");   
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        
        `;

        let current_task=document.querySelectorAll(".delete");
        for (let i=0;i<current_task.length;i++){
            current_task[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        

        let task = document.querySelectorAll('.task');
        for (let i=0;i<task.length;i++)
        {
            task[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }
        
        document.querySelector('#newtask input').value = "";

    }
}