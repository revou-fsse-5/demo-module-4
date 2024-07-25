import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Define the shape of a Todo item
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<Todo | null>(null);

  // Function to fetch the details of a single todo
  const fetchTodo = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setTodo(response.data);
    } catch (error) {
      console.error("Error fetching todo:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Todo Detail</h2>
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-bold">ID: {todo.id}</h3>
          <p className="mt-2">Title: {todo.title}</p>
          <p className="mt-2">Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
