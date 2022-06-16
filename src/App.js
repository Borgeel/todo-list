import { useState } from "react";

// Components
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Nauci Zanu React",
    },
    {
      id: 2,
      title: "Nauci Zanu zivotu",
    },
    {
      id: 3,
      title: "Nauci Zanu kuhati",
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
