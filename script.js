const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask(){

    const taskInput = document.getElementById("taskInput");

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="actions">
            <button class="complete-btn">✔</button>

            <button class="delete-btn">✖</button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");

    const deleteBtn = li.querySelector(".delete-btn");

    const task = li.querySelector(".task-text");

    completeBtn.addEventListener("click", function(){
        task.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}