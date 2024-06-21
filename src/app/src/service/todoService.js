import { HOST, HEADERS } from "../constants/api";

export const fetchTodos = async () => {
  try {
    const response = await fetch(HOST + "todos/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const createTodo = async (newTodo) => {
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
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const updateTodo = async (newTodo) => {
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
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const deleteTodo = async (id) => {
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
    console.error("There has been a problem with your fetch operation:", error);
  }
};
