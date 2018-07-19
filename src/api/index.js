
import ajax from './ajax';

//暴露模块接口
const BASE = '';

export const reqRegister = (user) =>ajax(BASE + "/register",user,"POST");

export const reqLogin = (user)=> ajax(BASE +'/login',user,"POST");