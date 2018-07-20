import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Cookies from 'js-cookie';

import LaobanInfo from '../laoban-info/laoban-info';
import DashenInfo from '../dashen-info/dashen-info';
import Dashen from '../dashen/dashen';
import LaoBan from '../laoban/laoban';
import Message from '../message/message';
import Personal from '../personal/personal';
import NavHeader from '../../component/nav-header/nav-header';
import NavFooter from '../../component/nav-footer/nav-footer';
export default class Main extends Component {
    render () {
        //判断主界面有无消息,如果浏览器没有cookie，则让他跳到login页面去
        const userid = Cookies.get('userid');
        if(!userid){
            this.props.history.replace('/login');
            return null;
        }
        return (
           <div>
               <NavHeader/>
               <Switch>
                   <Route path='/laobaninfo' component={LaobanInfo}/>
                   <Route path='/dasheninfo' component={DashenInfo}/>
                   <Route path='/dashen' component={Dashen}/>
                   <Route path='/laoban' component={LaoBan}/>
                   <Route path='/message' component={Message}/>
                   <Route path='/personal' component={Personal}/>
               </Switch>
               <NavFooter/>
           </div>
        )
    }
}