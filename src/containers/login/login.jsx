/*
注册组件
 */
import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button} from 'antd-mobile'
import Logo from "../../component/logo/Logo";
export default class Register extends Component {

    // 定义初始化状态
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen'
    };
    handleChange = (name, val) => {
        this.setState({
            [name]: val  // 属性名是name的值, 而不是name本身
        })
    };

    register = () => {
        console.log(this.state)
    };

    goRegister = () => {
        //跳转到登陆的路由
        this.props.history.replace('/register')
    };

    render() {
        return (
            <div>
                <NavBar>用户登陆</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={val=> this.handleChange('username', val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={val=> this.handleChange('password', val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>登&nbsp;&nbsp;陆</Button>
                        <Button onClick={this.goRegister}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}