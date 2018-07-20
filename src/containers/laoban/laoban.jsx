
import React, {Component} from 'react';
import {connect} from "react-redux";
class LaoBan extends Component {

    render () {
        return (
            <div>
                <h1>这是老板列表</h1>
            </div>
        )
    }

}
export default connect(
    state=>({user:state.user}),

)(LaoBan)