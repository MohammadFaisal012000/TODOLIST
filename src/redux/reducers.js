// firstly import the task
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

// initial state define
const initialState = {
  tasks: [],
};

// Using Switch for doing all three task add ,delete and edit 
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
      //  adding 
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      // Deleting use filter method
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      // edit  
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
