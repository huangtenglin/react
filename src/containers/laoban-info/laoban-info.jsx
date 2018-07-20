import React, {Component} from 'react';
import {Button, InputItem, NavBar, TextareaItem,WingBlank,List} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import HeaderSelector from '../../component/header-selector/header-selector';
import {updateUser} from '../../redux/actions';
class LaobanInfo extends Component {
    state = {
        header:'',
        info:'',
        post:'',
        salary:'',
        company:'',
    };
    //更新state的属性状态操作
    handleChange = (name,value) =>{
        this.setState({
            [name]: value,
        })
    };
    setHeader = (header)=>{
        this.setState({
            header
        })
    };
    save = () =>{
        this.props.updateUser(this.state);
    };
    render(){
        const {header, type} = this.props.user;
        console.log(header);
        // 如果用户信息已完善, 自动跳转到laoban主界面
        if(header) {
            return <Redirect to='/laoban'/>
        }
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <WingBlank>
                    <List>
                        <InputItem placeholder="招聘职位" onChange={val => this.handleChange('post',val)}>招聘职位</InputItem>
                        <InputItem placeholder="公司名称" onChange={val => this.handleChange('company',val)}>公司名称</InputItem>
                        <InputItem placeholder="职位薪资" onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
                        <TextareaItem title="职位要求:" rows={3}
                        onChange={val => this.handleChange('info', val)}/>
                        <Button type="primary" onClick={this.save}>保存</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }

}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(LaobanInfo);