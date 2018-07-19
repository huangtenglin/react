import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
export default class Main extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' ></Route>
                <Route path='/'></Route>
            </Switch>
        )
    }
}