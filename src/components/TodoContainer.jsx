import Todo from "./Todo";

function TodoContainer({ todos = [], delTodo }) {
  return (
    <div className="container">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          delTodo={() => delTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoContainer;
