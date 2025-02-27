export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (taskText) => {
  return (dispatch) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      dispatch({
        type: ADD_TASK,
        payload: taskText,
      });
    }, 500);
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    }, 500);
  };
};
