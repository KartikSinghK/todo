const input = document.querySelector("#input");
const list = document.querySelector("#list");
const deleteTodo = document.getElementsByClassName(".delete");
console.log(deleteTodo);
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    const todo = document.createElement("li");
    todo.classList.add("todo");
    todo.innerHTML = `${input.value}<span><i class="far fa-trash-alt delete"></span></i>`;
    list.append(todo);
    input.value = "";
  }
});
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("todo"))
    event.target.classList.toggle("done");
  if (event.target.classList.contains("delete")) {
    const todo = event.target.parentElement.parentElement;
    todo.remove();
  }
});
