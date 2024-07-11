// src/App.js
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="app-head">
      <h1 className="app-heading">React To-Do App</h1>
      <div className="app-task">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
