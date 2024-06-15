import React, { useState, useEffect } from "react";
import "./CurrTodo.css";
import "./../../styles/Headings.css";

const CurrTodo = ({ currTodo, handleEditTodo, handleDeleteTodo }) => {
  const [title, setTitle] = useState(currTodo.title);
  const [content, setContent] = useState(currTodo.content);
  const [createdOn, setCreatedOn] = useState(currTodo.createdOn);
  const [lastUpdatedOn, setLastUpdatedOn] = useState(currTodo.updatedOn);

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) return;
    const updatedTodo = { ...currTodo, title, content };
    handleEditTodo(updatedTodo);
  };

  const handleDelete = () => {
    handleDeleteTodo(currTodo.id);
  };

  useEffect(() => {
    setTitle(currTodo.title);
    setContent(currTodo.content);
    setCreatedOn(currTodo.created_at);
    setLastUpdatedOn(currTodo.updated_at);
  }, [currTodo]);

  return (
    <div className="new-todo">
      <div className="component-heading-1">My Todo</div>
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
      <div className="timestamps">
        <p>Created on: {createdOn}</p>
        <p>Last Updated on: {lastUpdatedOn}</p>
      </div>
      <div className="button-container">
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CurrTodo;
