
//多个组件的时候
import {combineReducers} from 'redux'

function reducer1(state = 0,action){
    switch (action.data){
        default:
            return state;
    }
}

function reducer2(state = {},action){
    switch (action.data){
        default:
            return state;
    }
}

//同一暴露模块接口
export default combineReducers({
    reducer1,
    reducer2
})