export const SET_TASKS = 'SET_TASKS';

export const setTasks = tasks => dispatch => {
  dispatch({
    type: SET_TASKS,
    payload: tasks,
  });
};
