import React, {Component} from 'react';
import {AUTH_SUCCESS, ERROR_MSG} from "./types";
import {reqRegister, reqLogin} from '../api';

//同步异步错误信息
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg});
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

//前台检查注册发送过来的信息
export function register(username, password, password2, type) {
    if (!username || !password) {
        errorMsg("用户名不能为空");
    }
    if (password !== password2) {
        errorMsg("密码错误")
    }
    return async dispatch => {
        //异步ajax请求，得到响应
        const response = await reqRegister({username, password, type});
        //获取请求体数据
        const result = response.data;
        //判断用户注册是否成功
        if (result.code === 0) {
            return dispatch(authSuccess(result.data));
        } else {
            return dispatch(errorMsg(result.msg));
        }
    }
}

//前台检查后台发送过来的信息
export const login =({username,password})=>{
    if(!username||!password){
        errorMsg("用户名不能为空或者密码不能为空");
    }
    return async dispatch =>{
        const response = await reqLogin({username,password,type});
        //获取请求数据
        const result = response.data;
        //进行数据判断
        if(result.code === 0){
            return dispatch(authSuccess(result.data));
        }else{
            return dispatch(errorMsg(result.msg));
        }
    }
};
