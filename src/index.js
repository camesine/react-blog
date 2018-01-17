import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/post_index'

ReactDOM.render(
  <Provider store={applyMiddleware(ReduxPromise)(createStore)(reducers)}>
    <BrowserRouter>
        <div>
          <Route path="/" component={PostIndex} />
        </div>
      </BrowserRouter>
  </Provider>
, document.getElementById('root'))
