import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Error from './components/Error';
import TodoApp from './containers/TodoApp';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';

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
