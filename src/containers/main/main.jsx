import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';


import LaobanInfo from '../laoban-info/laoban-info';
import DashenInfo from '../dashen-info/dashen-info';
import Dashen from '../dashen/dashen';
import LaoBan from '../laoban/laoban';
import Message from '../message/message';
import Personal from '../personal/personal';
import NavHeader from '../../component/nav-header/nav-header';
import NavFooter from '../../component/nav-footer/nav-footer';
import NoFound from '../../component/not-found/not-found';

import {getUser} from '../../redux/actions';
import {getRedirectPath} from "../../utils";

class Main extends Component {
    //组件类和组件对象
    //给组件对象添加属性
    navList = [
        {
            path:'/laoban',
            component: LaoBan,
            title: '大神列表',
            icon: 'dashen',
            text: '大神'
        },
        {
            path:'/dashen',
            component: Dashen,
            title: '老板列表',
            icon: 'laoban',
            text: '老板'
        },
        {
            path:'/message',
            component: Message,
            title: '消息列表',
            icon: 'message',
            text: '消息'
        },
        {
            path:'/personal',
            component:Personal,
            title: '个人中心',
            icon: 'personal',
            text: '个人'
        }
    ];

    componentDidMount (){
        //当前还没有登陆，但前面登陆过-->发异步ajax请求，获取当前用户信息
        const id = this.props.user._id;
        const userid = Cookies.get("userid");
        if(!id && userid){
            this.props.getUser();
        }
    }
    render () {
        //如果没有登陆过，则自动跳转到登陆的界面去

        const userid = Cookies.get('userid');
        console.log(userid);
        if(!userid){
            return <Redirect to = '/login'/>
        }
        const {user} = this.props;
        //如果cookie有保存过，但是现在还没有登陆过，则不做任何处理
        if(!user._id){
            return null;
        }
        //当前已经登陆过了，如果请求的是根路径："/",自动跳转到对应的路由(getRedirectPath())
        //得到当前的路径
        const path = this.props.location.pathname;
        console.log(path);
        if(path === '/'){
            return <Redirect to={getRedirectPath(user.type,user.header)}/>
        }
        const currentNav = this.navList.find(nav=> path === nav.path);
        //根据用户类型，决定隐藏那个板块
        const {navList} = this;
        if(user.type === 'dashen'){
            navList[0].hide = true;
        }else{
            navList[0].hide = true;
        }
        return (
           <div>
               {currentNav ? <NavBar> {currentNav.title}</NavBar>:null}
               <Switch>
                   <Route path='/laobaninfo' component={LaobanInfo}/>
                   <Route path='/dasheninfo' component={DashenInfo}/>
                   <Route path='/laoban' component={LaoBan}/>
                   <Route path='/dashen' component={Dashen}/>
                   <Route path='/message' component={Message}/>
                   <Route path='/personal' component={Personal}/>
                   <Route component={NoFound}/>
               </Switch>
               {currentNav ? <NavFooter navList = {navList}/> : null}
           </div>
        )
    }
}
export default connect(
    state =>({user:state.user}),
    {getUser}
)(Main)