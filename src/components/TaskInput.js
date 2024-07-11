// src/components/TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "./TakeInput.css";

const TaskInput = () => {
  // use State is use here for updating the value
  const [task, setTask] = useState("");
  // dispatch is used here for using reduce function like add
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask("");
    }
  };

  return (
    <div className="head-takeinput">
    // make form for ease to take the value and add it todo list
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit" className="takeinput-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
