import React, {Component} from 'react';
import {List, Grid} from 'antd-mobile';
import PropTypes from 'prop-types';
class HeaderSelector extends Component {
    static propTypes = {
        setHeader: PropTypes.func.isRequired
    };
    state = {
        icon:null,
    };
    constructor(props){
        super(props);
        this.headerList = [];
        for(let i = 0; i < 20; i++){
            const text = `头像${i+1}`;
            this.headerList.push({text, icon:require(`../../assets/imgs/${text}.png`)})
        }
    };
    //当我点击的时候，我要更改当前的图片和所要跟新的文字
    selectHeader = ({icon,text}) =>{
        //更新父级组件状态
        this.props.setHeader(text);
        //更新组件状态
        this.setState({icon});
    };
    render() {
        //计算头部显示
        const {icon} = this.state;
        const header = icon?<p>你选择的头像为<img src={icon}/></p>:'请选择头像';
        return (
            <List renderHeader={() => header}>
                <Grid data={this.headerList}
                      columnNum={5}
                      onClick={this.selectHeader}/>
            </List>
        )
    }

}

export default HeaderSelector;