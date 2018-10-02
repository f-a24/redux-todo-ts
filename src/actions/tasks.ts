import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();
/* ActionCreator */
export const inputTask = actionCreator<string>('INPUT_TASK');
export const addTask = actionCreator<string​​>('ADD_TASK');
