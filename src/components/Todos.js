import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          key={todo.id}
          onDelete={onDelete}
          id={todo.id}
        />
      ))}
    </>
  );
};

export default Todos;
