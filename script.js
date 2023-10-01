const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.classList.add("done-button");

        const datePlaceholder = document.createElement("span");
        const currentDate = new Date().toLocaleDateString();
        datePlaceholder.textContent = `Created on ${currentDate}`;
        datePlaceholder.classList.add("date-placeholder");

        li.appendChild(doneButton);
        li.appendChild(datePlaceholder);

        taskList.appendChild(li);
        taskInput.value = "";

        doneButton.addEventListener("click", () => {
            li.classList.toggle("important");
            setTimeout(() => {
                taskList.removeChild(li);
            }, 500); 
        });
    }
});