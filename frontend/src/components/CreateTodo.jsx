import React, { useState } from "react";
import "../index.css";

const CreateTodo = ({ createToDo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "30px",
      }}
    >
      <input
        type="text"
        name="title"
        className="inputStyle"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="description"
        className="inputStyle"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createToDo({ title, description });
          setTitle("");
          setDescription("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
