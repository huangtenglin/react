import React, {Component} from 'react';
import {Button} from 'antd-mobile';
class NoFound extends Component {

  render () {
    return (
        <div>
            <h1>很抱歉，没有找到</h1>
            <Button onClick={this.props.history.replace('/')}>回到首页</Button>
        </div>
    )
  }

}
export default NoFound;