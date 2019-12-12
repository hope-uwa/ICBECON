import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/bootstrap.min.css'
import './css/main.css'

//components


import reducers from './reducers/'
import Home from './components/Home/'


const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
)


ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
    </Provider>
    , document.querySelector("#root")
)