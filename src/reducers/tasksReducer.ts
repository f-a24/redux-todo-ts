import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addTask, inputTask } from '../actions/tasks';

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
export default reducerWithInitialState(initialState)
    .case(inputTask, (state: IState, payload: string) => ({
      ...state,
      task: payload
    }))
    .case(addTask , (state: IState, payload: string) => ({
      ...state,
      tasks: state.tasks.concat([payload])
    }));
