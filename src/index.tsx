import * as React from 'react';
import { render } from 'react-dom';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import Error from './components/Error';
import './index.css';

/* historyインスタンス生成   */
const history = createBrowserHistory();

/* Store */
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={TodoApp} />
        <Route exact={true} path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
