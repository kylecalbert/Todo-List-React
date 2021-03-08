import React from "react";
import "./Todo.css";
function Todo({ todo, inprogress, timestamp, id }) {
  return (
    <div className="todolist-container">
      <ul>
        <li>{todo}</li>
        <li>{todo}</li>
      </ul>
    </div>
  );
}

export default Todo;
