import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'

import Notifications from 'redux-notification'

import configureStore from './store/configureStore'
const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <App />
            <Notifications />
        </div>
    </Provider>,
    document.getElementById('app')
);