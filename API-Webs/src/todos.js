/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoItem(todo) {
  // Exercice 1
  // Compléter cette fonction de sorte à créer les éléments manquants :
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

  // Exercice 2
  // Au clic du bouton moins supprimer la balise div ancêtre
  // dont la classe est "todos-item"

  return divEl;
}
