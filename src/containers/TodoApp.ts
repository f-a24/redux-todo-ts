import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Dispatch } from 'redux';
import { addTask, inputTask } from '../actions/tasks';
import TodoApp from '../components/TodoApp';

interface IState {
  tasks: {
    task: string,
    tasks: string[]  
  };
}

export default connect(
  ({ tasks }: IState) =>
  ({
    task: tasks.task,
    tasks: tasks.tasks
  }),
  (dispatch: Dispatch) =>
  ({
    addTask(task: string) {
      dispatch(addTask(task));
    },
    inputTask(task: string) {
      dispatch(inputTask(task));
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  })
)(TodoApp);
