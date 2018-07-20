import React, {Component} from 'react';
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
} from "./types";
import {reqRegister, reqLogin,reqUpdateUser,reqUser} from '../api';
//加载同步请求信息
const authSuccess = (user) => ({type: AUTH_SUCCESS, data:user});
//异步错误用户操作
const errorMsg = (msg) => ({type: ERROR_MSG, data:msg});
//更新用户操作
const receiveUser = (user) => ({type: RECEIVE_USER, data: user});
//重置用户操作
const resetUser = (user) =>({type:RESET_USER,data:user});
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
//异步更新用户信息
export function updateUser(user){
   return async dispatch =>{
       //发送异步ajax请求
       const response = await reqUpdateUser(user);
       const result = response.data;
       if(result.code === 0){
           dispatch(receiveUser(result.data));
       }else{
           dispatch(resetUser(result.msg));
       }
   }
}
//异步获取用户信息
export function getUser(){
    return async dispatch=>{
        //发送异步请求的消息
        console.log('wolaile');
        const response = await reqUser();
        console.log('woshibaie');
        //获取得到的请求结果
        const result = response.data;
        if(result.code === 0){
            console.log('0000');
            dispatch(receiveUser(result.data));
        }else{
            console.log('1111');
            dispatch(resetUser(result.msg));
        }
    }
}
//同步action就是返回一个action的对象  然后去促发dispatch  然后调用reducer函数

//异步action就是发送Ajax请求等异步操作异步任务的代码。异步action返回的是一个dispatch参数的函数，这个函数是异步的，会去主动分发一个同步action，使之调用促发reducer，使之状态能够更新