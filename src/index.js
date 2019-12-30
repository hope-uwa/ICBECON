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
import Header from './components/containers/common/Header'
import Footer from './components/containers/common/Footer'
import Home from './components/Home/'
import About from './components/About/'
import Speaker from './components/Speaker/'
import Abstract from './components/Abstract';


const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
)


ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
                <div>
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about-conference" component={About} />
                        <Route path="/speakers" component={Speaker} />
                        <Route path="/abstract-submission" component={Abstract} />
                    </Switch>
                <Footer/>
                </div>
            </BrowserRouter>
    </Provider>
    , document.querySelector("#root")
)