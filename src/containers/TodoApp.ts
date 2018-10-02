import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

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
  (dispatch: any) =>
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
