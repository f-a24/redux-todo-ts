import { Reducer } from 'redux';
import { ADD_TASK, addTask, INPUT_TASK, inputTask } from '../actions/tasks';

type Action = ReturnType<typeof addTask | typeof inputTask>;
interface IState {
  task: string;
  tasks: string[];
}

/* Store初期状態 */
const initialState: IState = {
  task: '',
  tasks: []
};

/* Reducer */
export default ((state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      }
    }
    case INPUT_TASK: {
      return {
        ...state,
        task: action.payload.task
      }
    }
    default: return state;
  }
}) as Reducer<IState, Action>;
