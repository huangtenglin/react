
import ajax from './ajax';

//暴露模块接口
const BASE = '';

export const reqRegister = (user) =>ajax(BASE + "/register",user,"POST");

export const reqLogin = (user)=> ajax(BASE +'/login',user,"POST");

export const reqUpdateUser = (user) => ajax(BASE+'/update', user,'POST');

export const reqUser =  () => ajax(BASE +'/user');

// 获取指定类型的用户列表
export const reqUsers = (type) => ajax(BASE+'/list', {type});

//请求获取当前用户的所有聊天记录
export const reqChatMsgList = () =>ajax('/msglist');

//标识查看了指定用户发送的聊天消息
export const reqReadChatMsg = (from) =>ajax('/readmsg',{from},'POST');