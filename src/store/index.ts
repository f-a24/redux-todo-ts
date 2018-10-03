import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import tasksReducer from '../reducers/tasksReducer';

const loggerSetting = {
  predicate: (getState: any, action: any) => action.type !== 'HIGH_FREQUENCY_ACTION'
};

const logger = createLogger(loggerSetting);

/* 自作middleware
 * Actionが実行されるたびにローカルストレージに保存する
 */
const storageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};

const savedState = JSON.parse(window.localStorage.getItem('app-state') || '{}');
export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      router: routerReducer,
      tasks: tasksReducer
    }),
    savedState ? savedState : tasksReducer({task: '', tasks: []}, {type: 'INIT'}),
    applyMiddleware(routerMiddleware(history), logger, storageMiddleware, thunk)
  );
}