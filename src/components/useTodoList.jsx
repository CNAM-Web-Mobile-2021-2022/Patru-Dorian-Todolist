import { useState } from "react";

export function useTodoList() {
  const [list, TodosSet] = useState([]);

  // fonction pour ajouter une tâche

  function TodoAdd(text) {
    TodosSet((todos) => {
      return [...todos, { text: text, done: false, id: generateId() }];
    });
  }

  return { list, TodoAdd };
}

// pour donner un id à la tâche

function generateId() {
  return Date.now();
}