import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import PostIndex from './components/post_index'

ReactDOM.render(

  <BrowserRouter>
    <div>
      <Route path="/" component={PostIndex} />
    </div>
  </BrowserRouter>
  
, document.getElementById('root'));
