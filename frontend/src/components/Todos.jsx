import React from "react";

const Todos = ({ todos, updateToDo, deleteToDo }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <div
          key={todo._id}
          style={{
            display: "flex",
            gap: "3em",
            alignItems: "center",
            border: "1px solid white",
            padding: "0px 30px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <input
            type="checkbox"
            style={{
              width: "20px",
              height: "20px",
            }}
            checked={todo.completed}
            onChange={() => {
              //   if (todo.completed === true) return;
              updateToDo(todo._id);
            }}
          />
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <div
            style={{ cursor: "pointer", justifyContent: "space-between" }}
            onClick={() => {
              deleteToDo(todo._id);
            }}
          >
            &#10005;
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
