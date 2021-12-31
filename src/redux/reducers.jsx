import {SET_TASKS, SET_TASKS_ID} from './actions';

const initialState = {
  tasks: [],
  taskID: 1,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {...state, tasks: action.payload};
    default:
      return state;
  }
};
