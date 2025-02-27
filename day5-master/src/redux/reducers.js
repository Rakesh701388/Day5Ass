import { ADD_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(), // simple unique id using current timestamp
        text: action.payload,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
