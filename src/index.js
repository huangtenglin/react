import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch,Route,HashRouter} from 'react-router-dom';
import store from './redux/store';
import Login from './containers/login/login'
import register from './containers/register/register';
import Main from './containers/main/main'
import './assets/css/index.less';
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/register" component={register}/>
                <Route path="/login" component={Login}/>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
