// src/App.js
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="app-head">
    // Heading of Todo List
      <h1 className="app-heading">React To-Do App</h1>
      <div className="app-task">
    // TaskInput and TaskList component are use and import here
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
