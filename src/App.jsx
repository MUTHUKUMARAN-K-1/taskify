import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputVal },
      ]);
      setInputVal("");
    }
  }

  function deleteTodo(todoId) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== todoId)
    );
  }

  return (
    <main>
      <h1>To Do list</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={deleteTodo} />
    </main>
  );
}

export default App;
