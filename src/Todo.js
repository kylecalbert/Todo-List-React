import React from "react";
import "./Todo.css";
import { db } from "./firebase_config";

function Todo({ todo, inprogress, timestamp, id }) {
  const toggleinProgress = () =>
    db.collection("todos").doc(id).update({ inprogress: !inprogress });

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  const editTodo = () => db.collection("todos").doc(id).update({ todo: todo });
  ///check if edit =true or false
  //ifedit = false

  return (
    <div className="todolist-item">
      <ul>
        <li>{todo}</li>
        <p>{inprogress ? "In progress" : "Completed"}</p>
      </ul>
      <div className="btns">
        <button onClick={toggleinProgress} className="done">
          {inprogress ? "Done" : "Undo"}
        </button>
        <button onClick={deleteTodo} className="delete">
          X
        </button>
        <button className="edit">Edit</button>
      </div>
      <div className="edit-input-container">
        <input value="false" className="edit-input"></input>
        <button className="edit-input-button">Submit</button>
      </div>
    </div>
  );
}

export default Todo;
