import { ButtonGroup } from "@material-ui/core";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase_config";
import firebase from "firebase";
import Todo from "./Todo";
function App() {
  const [todosList, setTodosList] = useState([]);

  const [todoInput, setTodoInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    }); //
    setTodoInput("");
  };

  useEffect(() => {
    getTodos();
  }, []); //blank to run only on first launch

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodosList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };
  console.log(todosList);

  return (
    <div className="App">
      <h1>Kyle Todo App</h1>
      <div className="container">
        <form>
          <input
            type="text"
            onChange={(e) => {
              setTodoInput(e.target.value);

              e.preventDefault();
            }}
            value={todoInput}
          ></input>
          <button type="submit" onClick={addTodo}>
            submit
          </button>
        </form>

        {todosList.map((todo) => (
          <Todo todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
        ))}

        <div />
      </div>
    </div>
  );
}

export default App;
