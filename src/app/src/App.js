import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/Headings.css";
import TodoList from "./component/todolist/TodoList";
import NewTodo from "./component/newtodo/NewTodo";
import CurrTodo from "./component/currtodo/CurrTodo";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./service/todoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [currSelectedTodo, setCurrSelectedTodo] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };

    loadTodos();
  }, []);

  const handleSelectTodo = (id) => {
    if (!id) {
      setCurrSelectedTodo(null);
    } else {
      setCurrSelectedTodo(filterTodo(id));
    }
  };

  const filterTodo = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const handleAddTodo = async (newTodo) => {
    let data = await createTodo(newTodo);
    setTodos([
      ...todos,
      {
        id: data.id,
        title: data.title,
        content: data.content,
        created_at: data.created_at,
        updated_at: data.updated_at,
      },
    ]);
  };

  const handleEditTodo = async (updatedTodo) => {
    let data = await updateTodo(updatedTodo);
    setTodos(todos.map((todo) => (todo.id === data.id ? data : todo)));
    setCurrSelectedTodo(null);
  };

  const handleDeleteTodo = (id) => {
    if (deleteTodo(id)) {
      setCurrSelectedTodo(null);
      setTodos(todos.filter((todo) => todo.id !== id));
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-heading">ToDo App</div>
        <TodoList
          todos={todos.map((todo) => todo)}
          handleSelectTodo={handleSelectTodo}
        />
        {currSelectedTodo === null ? (
          <NewTodo handleAddTodo={handleAddTodo} />
        ) : (
          <CurrTodo
            currTodo={currSelectedTodo}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </header>
    </div>
  );
}

export default App;
