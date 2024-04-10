import { createTodoItem } from "./todos.js";
const formEl = document.querySelector(".todos-form");
const inputEl = document.querySelector(".todos-form-value");
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
// Exercice 3
// Au clic de la checkbox présente dans le formulaire
// cocher ou décocher toutes les checkboxes qui sont dans
// la balise div ayant la classe "todos-list"
// Exercice 5
// Ramener tous les addEventListener du fichier todos.js
// ici en écoutant les événements sur listEl
// puis en déterminant grace à la classe comme dans l'exemple de la slide 29
// s'ils correspondent au élément qui doivent déclencher l'action
