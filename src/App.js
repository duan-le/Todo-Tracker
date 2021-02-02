import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

// let nextTodoID = 3;

function App() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const date = `${month} ${day}, ${year}`;

  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Click the green 'Add' button to add a to-do item.",
      date: date,
      reminder: false,
    },
    {
      id: 1,
      text: "Click the red 'x' remove a to-do item.",
      date: date,
      reminder: false,
    },
    {
      id: 2,
      text: "Double click the to-do item to toggle the highlight function.",
      date: date,
      reminder: false,
    },
  ]);

  const [nextTodoID, setNextTodoID] = useState(todos.length);

  const [showAddTodo, setShowAddTodo] = useState(false);

  // Add todo
  const addTodo = (todo) => {
    const id = nextTodoID;
    setNextTodoID(nextTodoID + 1);
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
      <Header
        onAdd={() => setShowAddTodo(!showAddTodo)}
        showAddTodo={showAddTodo}
      />
      {showAddTodo ? <AddTodo onAdd={addTodo} /> : ""}
      <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
