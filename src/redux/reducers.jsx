//多个组件的时候
import {combineReducers} from 'redux';
import {getRedirectTo} from '../utils';
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    RECEIVE_USER_LIST,
    RECEIVE_CHAT_MSG,
    RECEIVE_CHAT_MSGS,
}
    from "./types";
const initUser = {
    username:'',
    type: '',
    msg:'',        // 需要返回错误的信息
    redirectTo: '' // 需要自动跳转的路由path
};
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            const user = action.data;
            return {...user,redirectTo: getRedirectTo(user.type, user.header)};
        case ERROR_MSG:
            return {...state,msg: action.data};
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...state,msg: action.data};
        default:
            return state;
    }
}
const initUserList = [];
function userList(state=initUserList,action){
    switch (action.type){
        case RECEIVE_USER_LIST:
            return action.data; //action.data,state.data有什么区别没有
        default:
            return state;
    }
}
//产生chat相关数据的reducer
const initChat = {
    chatMsgs: [],  // 消息数组 [{from: id1, to: id2}{}]
    users: {},  // 所有用户的集合对象{id1: user1, id2: user2}
    unReadCount: 0 // 未读消息的数量
};
// 管理聊天相关状态数据的reducer
function chat(state=initChat, action) {
    switch (action.type) {
        case RECEIVE_CHAT_MSGS:  // data: {users, chatMsgs}
            const {users, chatMsgs, userid} = action.data;
            return {
                users,
                chatMsgs,
                unReadCount: 0
            };
        case RECEIVE_CHAT_MSG: // data: chatMsg
            const chatMsg = action.data;
            return {
                users: state.users,
                chatMsgs: [...state.chatMsgs, chatMsg],
                unReadCount: 0
            };
        default:
            return state
    }
}

//同一暴露模块接口
export default combineReducers({
    user,
    userList,
    chat
})