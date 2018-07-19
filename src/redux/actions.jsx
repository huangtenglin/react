import React, {Component} from 'react';
import {AUTH_SUCCESS, ERROR_MSG} from "./types";
import {reqRegister, reqLogin} from '../api';
//加载同步请求信息
const authSuccess = (user) => ({type: AUTH_SUCCESS, data:user});
const errorMsg = (msg) => ({type: ERROR_MSG, data:msg});
//加载注册的异步请求消息
export function register(user) {
    const {username, password, password2, type} = user;
    if (!username ||!password) {
        return errorMsg("用户名或者密码不能为空");
    } else if (password !== password2) {
        return errorMsg("密码验证错误");
    }
    return async dispatch => {
        const response = await reqRegister({username, password, type}); //异步获取请求数据
        const result = response.data;
        if (result.code === 0) {
            dispatch(authSuccess(result.data));
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}
//加载登陆的异步请求消息
export function login(user){
    return async dispatch =>{
        const {username,password} = user;
        if(!username || !password){
            dispatch(errorMsg("账号或者密码不能为空"));
            return;
        }
        const response = await reqLogin({username,password});
        const result = response.data;
        if(result.code === 0){
            //发布成功的action
            dispatch(authSuccess(result.data));
        }else{
            //发布失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}

