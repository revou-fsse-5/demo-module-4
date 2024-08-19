import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}
function Todo() {
  // const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosInput, setTodosInput] = useState<string>("");
  console.log("todos", todos);

  useEffect(() => {
    console.log("first useeffect");
    fetchTodos();
  }, []);
  // https://jsonplaceholder.typicode.com/todos

  const fetchTodos = async () => {
    // untuk ambil data ke web bisa pakai 2 fetch / axios
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data.slice(0, 10));
      console.log("isi response", response);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async () => {
    console.log(todosInput);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: todosInput,
        }
      );
      console.log("todo add", response);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setTodosInput(event.target.value);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={todosInput}
        onChange={handleChange}
        placeholder="Add a new todo here"
      />
      <button onClick={addTodo}>submit todo</button>
      <h1>
        {todos.map((todo, id) => (
          <div key={id}>
            <h1>{todo.title}</h1>
          </div>
        ))}
      </h1>
      {/* <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button> */}
    </div>
  );
}

export default Todo;
