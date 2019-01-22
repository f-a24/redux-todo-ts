/* ActionCreator */
export const INPUT_TASK = 'INPUT_TASK';
export const ADD_TASK = 'ADD_TASK';

export const inputTask = (payload: {task: string}) => ({
  payload,
  type: INPUT_TASK as typeof INPUT_TASK
});
export const addTask = (payload: {task: string}) => ({
  payload,
  type: ADD_TASK as typeof ADD_TASK
});
