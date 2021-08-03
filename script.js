const addBtn = document.querySelector("#add-item");
const inputField = document.querySelector("#input-field");

const sectionTaskToDo = document.querySelector(".task-to-do");

const tasks = document.querySelector(".tasks");

const infoTextToDo = document.querySelector("#info-text-to-do");

let completeTask;
const addTask = () => {
  infoTextToDo.remove();

  if (inputField.value !== "") {
    sectionTaskToDo.innerHTML += `
    <div class="to-do to-do-show">${inputField.value}
    <input type="checkbox" name="completed-task" id="completed-task" />
    </div>`;
    inputField.value = "";
  }

  const toDo = document.querySelectorAll(".to-do");
  setTimeout(() => {
    for (let i = 0; i < toDo.length; i++) {
      toDo[i].classList.remove("to-do-show");
    }
  }, 600);

  completeTask = document.querySelectorAll("#completed-task");
};

const removeTaskFunc = () => {
  for (let i = 0; i < completeTask.length; i++) {
    completeTask[i].addEventListener("click", () => {
      completeTask[i].parentNode.classList.toggle("to-do-closing");
    });
  }
};

addBtn.addEventListener("click", () => {
  addTask();
  removeTaskFunc();
});

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && inputField.value !== "") {
    addTask();
    removeTaskFunc();
  }
});

const taskMenuChanger = () => {
  tasks.classList.toggle("not-active-menu");
  tasksCompleted.classList.toggle("not-active-menu");
  sectionTaskToDo.classList.toggle("not-active");
  sectionCompletedTask.classList.toggle("not-active");
};

tasks.addEventListener("click", () => {
  taskMenuChanger();
});
