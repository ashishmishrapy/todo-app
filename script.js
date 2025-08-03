let todoList = document.getElementById("todoList");
let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = todoInput.value.trim();
  let li = document.createElement("li");
  let span = document.createElement("span");
  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";
  let buttonDone = document.createElement("button");
  let buttonEdit = document.createElement("button");
  let buttonDelete = document.createElement("button");
  buttonDone.textContent = "Done";
  buttonEdit.textContent = "Edit";
  buttonDelete.textContent = "Delete";
  console.log(value);

  span.id = "todoText";
  span.textContent = value;
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(buttonsDiv);
  buttonsDiv.appendChild(buttonDone);
  buttonsDiv.appendChild(buttonEdit);
  buttonsDiv.appendChild(buttonDelete);
});

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    let button = e.target;
    let li = button.parentElement.parentElement;
    if (button.textContent === "Delete") {
      li.remove();
    } else if (button.textContent === "Edit") {
      let newValue = prompt("Edit your todo:", li.firstChild.textContent);
      if (newValue) {
        li.firstChild.textContent = newValue;
      }
    } else if (button.textContent === "Done") {
      let span = li.querySelector("#todoText");
      let allButtons = li.querySelectorAll("button");
      let [doneBtn, editBtn, deleteBtn] = allButtons;

      span.style.textDecoration = "line-through";
      span.style.color = "gray";

      doneBtn.disabled = true;
      doneBtn.style.backgroundColor = "lightgray";
      doneBtn.style.color = "darkgray";
      doneBtn.style.cursor = "not-allowed";

      editBtn.disabled = true;
      editBtn.style.backgroundColor = "lightgray";
      editBtn.style.color = "darkgray";
      editBtn.style.cursor = "not-allowed";
    }
  }
});
