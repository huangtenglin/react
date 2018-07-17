import Ajax from './ajax';

//请求注册
export const reqRegister = (user) =>Ajax('/register',user,'POST');
//请求登陆
export const reqLogin = (user) => Ajax('/login',user, 'POST');