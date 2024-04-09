/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoItem(todo) {
  // <div class="todos-item" data-todo-id="1">
  //   <input type="checkbox" checked class="todos-completed">
  //   <span class="todos-title">Acheter du pain</span>
  //   <button class="todos-button-remove">-</button>
  // </div>
  const divEl = document.createElement('div');
  divEl.className = "todos-item";
  divEl.dataset.todoId = String(todo.id);

  const spanEl = document.createElement('span');
  spanEl.className = 'todos-title';
  spanEl.innerText = todo.title;

  divEl.append(spanEl);

  return divEl;
}
