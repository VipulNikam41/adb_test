import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/Headings.css";
import TodoList from "./component/todolist/TodoList";
import NewTodo from "./component/newtodo/NewTodo";
import CurrTodo from "./component/currtodo/CurrTodo";

const HOST = "http://localhost:8000/";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function App() {
  const [todos, setTodos] = useState([]);
  const [currSelectedTodo, setCurrSelectedTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
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

  const fetchTodos = async () => {
    try {
      const response = await fetch(HOST + "todos/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const createTodo = async (newTodo) => {
    try {
      const response = await fetch(HOST + "todos/", {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          title: newTodo.title,
          content: newTodo.content,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const updateTodo = async (newTodo) => {
    try {
      const response = await fetch(HOST + "todos/" + newTodo.id, {
        method: "PUT",
        headers: HEADERS,
        body: JSON.stringify({
          title: newTodo.title,
          content: newTodo.content,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(HOST + "todos/" + id, {
        method: "DELETE",
        headers: HEADERS,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      await response.json();
      return true;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const handleAddTodo = async (newTodo) => {
    let data = await createTodo(newTodo);
    setTodos([
      ...todos,
      {
        id: data.id,
        title: data.title,
        content: data.content,
        createTime: data.create_time,
        updateTime: data.update_time,
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
