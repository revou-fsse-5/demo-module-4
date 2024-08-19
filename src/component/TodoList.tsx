import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the shape of a Todo item
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   navigate("/login"); // Redirect to login if not authenticated
    // } else {
    // }
    fetchTodos(); // Fetch todos if authenticated
  }, [navigate]);

  // Function to fetch todos from the JSONPlaceholder API
  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("Fetched todos:", response.data); // Log the fetched todos
      setTodos(response.data.slice(0, 10));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Function to add a new todo to the list
  const addTodo = async () => {
    if (!newTodoTitle) return;
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: newTodoTitle,
          completed: false,
        }
      );
      console.log("Added todo:", response.data);
      setTodos([...todos, response.data]);
      setNewTodoTitle("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Function to update the completion status of a todo
  const updateTodo = async (id: number, completed: boolean) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          completed,
        }
      );
      console.log("Updated todo:", response.data);
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Function to delete a todo from the list
  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log("Deleted todo with id:", id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Todo List</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border rounded-md"
            >
              <span
                className={`flex-grow ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => updateTodo(todo.id, !todo.completed)}
              >
                {todo.title}
              </span>
              <button
                className="px-2 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
