const addBtn = document.getElementById("addBtn");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");


// LOAD SAVED TASKS WHEN WEBSITE OPENS
loadTasks();


// ADD TASK BUTTON
addBtn.addEventListener("click", addTask);


// ENTER KEY SUPPORT
taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTask();
    }

});


// MAIN FUNCTION TO ADD TASK
function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    createTaskElement(taskText);

    saveTask(taskText);

    updateCounter();

    taskInput.value = "";
}


// CREATE TASK ELEMENT
function createTaskElement(taskText){

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

    const text = li.querySelector(".task-text");


    // COMPLETE TASK
    completeBtn.addEventListener("click", function(){

        text.classList.toggle("completed");

    });


    // DELETE TASK
    deleteBtn.addEventListener("click", function(){

        li.remove();

        removeTask(taskText);

        updateCounter();

    });


    taskList.appendChild(li);

    updateCounter();
}


// SAVE TASK IN LOCAL STORAGE
function saveTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// LOAD TASKS
function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        createTaskElement(task);

    });

    updateCounter();
}


// REMOVE TASK
function removeTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(function(t){

        return t !== task;

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// UPDATE TASK COUNTER
function updateCounter(){

    const totalTasks = document.querySelectorAll("li").length;

    document.getElementById("taskCounter").innerText =
        `Total Tasks: ${totalTasks}`;
}
