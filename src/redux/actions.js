// Here Define the three task in action file 1. Add 2.Delete 3.Edit
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});
