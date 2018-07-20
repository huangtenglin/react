
import ajax from './ajax';

//暴露模块接口
const BASE = '';

export const reqRegister = (user) =>ajax(BASE + "/register",user,"POST");

export const reqLogin = (user)=> ajax(BASE +'/login',user,"POST");

export const reqUpdateUser = (user) => ajax(BASE+'/update', user,'POST');

export const reqUser =  () => ajax(BASE +'/user');