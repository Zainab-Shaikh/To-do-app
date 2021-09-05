import "./App.css";
import Input from "./components/Input";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  let initialValue = {
    id: uuidv4(),
    value: "",
    checked: false,
  };
  let [data, setData] = useState(initialValue);
  function handleChange(e) {
    setData({ ...data, value: e.target.value });
  }
  let [todo, setTodo] = useState(JSON.parse(localStorage.getItem("key")) || []);
  function add() {
    setData({ ...data, id: uuidv4() });
    setTodo((todo = [...todo, data]));
    localStorage.setItem("key", JSON.stringify(todo));
    console.log(todo);
  }
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  function handleRemove(remove_index) {
    let newTodo = todo.filter((item) => item.id !== remove_index);
    setTodo(newTodo);
    localStorage.setItem("key", JSON.stringify(newTodo));
    console.log(todo);
  }
  function done(id) {
    let newTodo = todo.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setTodo(newTodo);
    localStorage.setItem("key", JSON.stringify(newTodo));
    console.log(todo);
  }
  return (
    <>
      <Input type="text" onChange={handleChange} value="+" add={add} />
      <Form todo={todo} remove={handleRemove} done={done} />
    </>
  );
}

export default App;
