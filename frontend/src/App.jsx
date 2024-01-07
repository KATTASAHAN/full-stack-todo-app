import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch("http://localhost:3000/todo/read").then(async (todos) => {
      const data = await todos.json();
      if (data.success) setTodos(data.todos);
    });
  }

  function createToDo(todo) {
    fetch(`http://localhost:3000/todo/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todo,
      }),
    }).then(() => {
      apiCall();
    });
  }

  function updateToDo(id) {
    fetch(`http://localhost:3000/todo/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      apiCall();
    });
  }

  function deleteToDo(id) {
    fetch(`http://localhost:3000/todo/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      apiCall();
    });
  }

  return (
    <>
      <CreateTodo createToDo={createToDo} />
      <Todos todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
}

export default App;
