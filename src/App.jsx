import "./App.css";
import Todo from "./components/todo";
import Header from "./components/header";



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
  const todos = [
    {
      title: "Car",
    },
    {
      title: "Kun.Uz",
    },
    
  ];
  return (
    <div>
      <Header />
      <div className="todo-container">
        {todos.map((t) => {
          return <Todo title={t.title}/>
        })}
      </div>
    </div>
  );
}

export default App;
