import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  Store
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import tasksReducer from '../reducers/tasksReducer';

interface IState {
  task: string;
  tasks: string[];
}

const loggerSetting = {
  predicate: (getState: () => IState, action: Action) => action.type !== 'HIGH_FREQUENCY_ACTION'
};

const logger = createLogger(loggerSetting);

/* 自作middleware
 * Actionが実行されるたびにローカルストレージに保存する
 */
const storageMiddleware = (store: Store) => (next: (action: Action) => Action) => (action: Action) => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};

const savedState = JSON.parse(window.localStorage.getItem('app-state') || '{}');
export default function createStore(history: History) {
  return reduxCreateStore(
    combineReducers({
      router: routerReducer,
      tasks: tasksReducer
    }),
    savedState ? savedState : tasksReducer({task: '', tasks: []}, {type: 'INIT'}),
    applyMiddleware(routerMiddleware(history), logger, storageMiddleware, thunk)
  );
}