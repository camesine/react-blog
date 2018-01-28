import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/post_index'
import PostNew from './components/post_new'
import './style/style.css'

ReactDOM.render(
  <Provider store={applyMiddleware(ReduxPromise)(createStore)(reducers)}>
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
