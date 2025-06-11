import Todo from "./Todo";

function ToDoContainer({ todos = [], delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={todo.id || index}
            todo={todo}
            delTodo={() => delTodo(index)}
          />
        );
      })}
    </div>
  );
}

export default ToDoContainer;
