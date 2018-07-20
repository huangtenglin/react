/*
使用axios封装的ajax请求函数
函数返回的是promise对象
 */
import axios from 'axios';

export default function ajax(url, data, type) {
    if (type === "GET") {
        let dataStr = ''; //?username= 'zhangsan'& password = '123'
        Object.keys(data).forEach(function (key) {
            dataStr += key + '=' + data[key] + '&';
        });
        if(dataStr !== ''){
            dataStr = dataStr.substring(0,dataStr.length-1);
            url = url + '?' + dataStr;
        }
        //就是一个url的拼接
        return axios.get(url);
    } else {
        return axios.post(url, data);
    }
}