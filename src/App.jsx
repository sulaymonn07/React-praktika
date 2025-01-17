import "./App.css";
import Todo from "./components/todo";
import Header from "./components/header";
import { useState } from "react";

// container
//     header
//          input
//          button
//     todo-container
//  todo
// p
//  todo
// p

function App() {
  const [son, sonYangilash] = useState(0);
  const [todo, setTodo] = useState("");

  let todos = [
    {
      title: "Car",
    },
    {
      title: "Kun.Uz",
    },
  ];

  const addTodo = () => {
    console.log(todo);

    todos.push({ title: todo });
  };

  return (
    <div>
      <div>
        <span>
          <button onClick={() => sonYangilash(son - 1)}>-</button>
          <span>{son}</span>
          <button onClick={() => sonYangilash(son + 1)}>+</button>
        </span>
      </div>
      <header className="header">
        <input
          onChange={(e) => console.log(e.target.value)}
          className="input"
          type="text"
          placeholder="Add Task"
        />
        <button onClick={addTodo} className="button">
          Add
        </button>
      </header>
      <div className="todo-container">
        {todos.map((t) => {
          return <Todo title={t.title} />;
        })}
      </div>
    </div>
  );
}

export default App;
