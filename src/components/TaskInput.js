// src/components/TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "./TakeInput.css";

const TaskInput = () => {
  const [task, setTask] = useState("");
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
