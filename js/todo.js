const toDoForm = document.querySelector(".todo-form-js"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".todo-list-js");

const TODO_LS = "todo";

let toDoArray = [];

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDoArray));
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function deleteToDo(e) {
  const btn = e.target,
    li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDoArray.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  toDoArray = cleanToDo;
  saveToDo();
}

function paintToDo(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    newId = toDoArray.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  li.innerText = text;
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDoArray.push(toDoObj);
  saveToDo();
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null) {
    const parseToDo = JSON.parse(loadedToDo);
    parseToDo.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
