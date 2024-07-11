// src/components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (task) => {
    const newText = prompt("Edit your task", task.text);
    if (newText) {
      dispatch(editTask({ ...task, text: newText }));
    }
  };

  return (
    <div className="tasklist-head">
      {tasks.map((task) => (
        <div key={task.id} className="tasklist">
          {task.text}
          <div>
            <button onClick={() => handleEdit(task)} className="edit-button">
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
