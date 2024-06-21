import React from "react";
import "./TodoList.css";
import "./../../styles/Headings.css";

const TodoList = ({ todos, handleSelectTodo }) => {
  const selectItem = (todo) => {
    handleSelectTodo(todo.id);
  };

  const newTodo = () => {
    handleSelectTodo(null);
  };

  return (
    <div className="todo-list">
      <div className="component-heading-2">
        My Todos
        <button className="plus-button" onClick={newTodo}>
          +
        </button>
      </div>
      <div className="todo-list-bar">
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            className="todo-item"
            onClick={() => selectItem(todo)}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
