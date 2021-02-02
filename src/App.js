import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Task 1",
      date: "Febuary 02, 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Task 2",
      date: "Febuary 03, 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "Task 3",
      date: "Febuary 04, 2021",
      reminder: false,
    },
  ]);

  // Add todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTodo onAdd={addTodo} />
      <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
