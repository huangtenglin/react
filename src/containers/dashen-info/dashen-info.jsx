import React, {Component} from 'react';
import {Button, InputItem, NavBar, TextareaItem, WingBlank, List} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import HeaderSelector from '../../component/header-selector/header-selector';
import {updateUser} from '../../redux/actions';

class dashenInfo extends Component {
    state = {
        header: '',
        info: '',
        post: '',
        salary: '',
        company: '',
    };
    setHeader = (header) => {
        this.setState({
            header
        })
    };
    save = () => {
        this.props.updateUser(this.state);
    };

    render() {
        const {header} = this.props.user;
        // 如果用户信息已完善, 自动跳转到laoban主界面
        if (header) {
            return <Redirect to='/dashen'/>
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem>求职岗位:</InputItem>
                <TextareaItem title="个人介绍:"
                              rows={3}/>

                <Button type='primary' onClick={this.save}>保存</Button>
            </div>
        )
    }

}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(dashenInfo);