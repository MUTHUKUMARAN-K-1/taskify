function Todo({todo, delTodo}) {
  return (
    <div className="todo">
      <p>{todo.text}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={delTodo}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;