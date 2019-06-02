import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store/index'

import './styles/main.css';
import App from './components/App';

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)
