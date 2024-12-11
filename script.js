const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ""; // Clear input field after adding the task
  }
});

function addTask(taskText) {
  const taskItem = document.createElement("li");

  // Create task label
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;
  taskLabel.addEventListener("click", () => {
    taskItem.classList.toggle("completed"); // Toggle completed state
  });

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem); // Remove task from list
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}
