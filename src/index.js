import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/main.scss';  
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import initStore from './store';

const history = createBrowserHistory();
export const store = initStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
