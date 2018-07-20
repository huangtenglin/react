/*
大神主界面路由
 */
import React, {Component} from 'react';

import {connect} from 'react-redux';
class DaShen extends Component {

  render () {
    return (
        <div>
            <h1>这是大神列表</h1>
        </div>
    )
  }

}
export default connect(
    state=>({user:state.user}),

)(DaShen)