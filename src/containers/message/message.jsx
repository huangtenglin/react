import React, {Component} from 'react';

import {connect} from 'react-redux';
class Message extends Component {

    render () {
        return (
            <div>
                <h1>这是消息列表</h1>
            </div>
        )
    }

}
export default connect(
    state=>({user:state.user}),

)(Message)