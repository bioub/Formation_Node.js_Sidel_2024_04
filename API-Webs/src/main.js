import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector(".todos-form");

/** @type {HTMLInputElement} */
const inputEl = document.querySelector(".todos-form-value");

/** @type {HTMLDivElement} */
const listEl = document.querySelector(".todos-list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputEl.value;

  const itemEl = createTodoItem({
    id: Math.random(),
    title: value,
    completed: false,
  });
  listEl.append(itemEl);
});
