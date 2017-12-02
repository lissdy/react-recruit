import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './container/login/login'
import Register from './container/register/register'
import {BrowserRouter, Route} from 'react-router-dom'
import '../node_modules/antd-mobile/dist/antd-mobile.css'; // or 'antd-mobile/dist/antd-mobile.less'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
  </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
