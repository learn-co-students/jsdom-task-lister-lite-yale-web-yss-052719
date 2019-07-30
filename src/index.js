document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("new-task-priority");
  const tasks = document.getElementById("tasks")
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = taskDescription.value
    tasks.append(li)
    event.target.reset()
  })
});
