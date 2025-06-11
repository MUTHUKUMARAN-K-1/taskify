import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputVal }, // <-- Store as object
      ]);
      setInputVal("");
    }
  }

  function deleteTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => {
        return index !== todoIndex;
      })
    );
  }
  console.log(todos);
  return (
    <main>
      <h1>To Do list</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <ToDoContainer todos={todos} delTodo={deleteTodo} /> {/* Fix usage */}
    </main>
  );
}

export default App;
