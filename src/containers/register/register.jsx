import React, {Component} from 'react'
import {NavBar, List, WingBlank, WhiteSpace, InputItem, Button, Radio} from 'antd-mobile'
import Logo from "../../component/logo/Logo";

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        type: 'dashen'
    };
    handleChange = (name,val) =>{
        this.setState({
            [name]: val, //属性名是name的值，不是name本身
        })
    };
    register = () =>{
        console.log(this.state);
    };
    goLogin = () =>{
        this.props.history.replace('/login');//跳转路由地址
    };
    render() {
        const {type} = this.state
        return (
            <div>
                <Logo/>
                <NavBar>用户注册</NavBar>
                {/*<Logo/>*/}
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={val=> this.handleChange('username', val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={val=> this.handleChange('password', val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入确认密码' onChange={val=> this.handleChange('password2', val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型: </span>&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={() => this.handleChange('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={() => this.handleChange('type', 'laoban')}>老板</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }

}