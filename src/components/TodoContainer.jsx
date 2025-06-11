import Todo from "./Todo";

function TodoContainer({ todos = [], delTodo }) {
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

export default TodoContainer;
