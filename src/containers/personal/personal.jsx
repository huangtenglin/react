import React, {Component} from 'react';

import {connect} from 'react-redux';
class Personal extends Component {

    render () {
        return (
            <div>
                <h1>这是个人中心列表</h1>
            </div>
        )
    }

}
export default connect(
    state=>({user:state.user}),

)(Personal)