import { useState } from "react";

// Components
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn JavaScript",
    },
    {
      id: 3,
      title: "Get a deeper knowledge",
    },
  ]);

  // Delete Todo
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todos todos={todos} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
