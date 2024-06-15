import React, { useState } from "react";
import "./NewTodo.css";
import "./../../styles/Headings.css";

const NewTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title or content empty");
      return;
    }
    handleAddTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="new-todo">
      <div className="component-heading-1">Add New Todo</div>
      <textarea
        className="title-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        className="content-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
      />
      <div className="button-container">
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTodo;
