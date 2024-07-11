// src/components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/actions";
import "./TaskList.css";

const TaskList = () => {
  // here we use selector for knowing about the state  and dispatch is use for reducer function
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
// delete task 
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
// Edit task
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
  // onClick handler is used for edit
            <button onClick={() => handleEdit(task)} className="edit-button">
              Edit
            </button>
    // onClick handler is used for delete
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
