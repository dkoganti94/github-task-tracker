const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");


const tasks = [
  { text: "Initialize the repository", complete: false },
  { text: "Create the first commit", complete: false },
  { text: "Open a pull request", complete: false }
];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.textContent = task.text;
    item.className = task.complete ? "complete" : "";
    item.addEventListener("click", () => toggleTask(index));
    taskList.appendChild(item);
  });

  updateTaskCount();
}


function addTask(text) {
  tasks.push({ text, complete: false });
  renderTasks();
}

function toggleTask(index) {
  tasks[index].complete = !tasks[index].complete;
  renderTasks();
}

function updateTaskCount() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.complete).length;
  taskCount.textContent = `${completed} of ${total} tasks complete`;
}


taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (!text) {
    return;
  }

  addTask(text);
  taskInput.value = "";
});

renderTasks();

