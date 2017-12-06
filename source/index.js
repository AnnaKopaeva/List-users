import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, HashRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import RoutePagination from './components/App/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // позволяет нам отправлять функции
        loggerMiddleware // аккуратно логируем действия
    )
);

render(
    <Provider store={store}>
        <HashRouter>
            <RoutePagination />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)