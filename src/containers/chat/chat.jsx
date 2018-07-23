import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavBar, List, InputItem, Icon} from 'antd-mobile';
import {sendMessage} from '../../redux/actions';

class Chat extends Component {
    state = {
        content: '',
    };
    send = () => {
        //通过socketo向服务器发送消息
        const content = this.state.content.trim();
        const to = this.props.match.params.userid;
        const from = this.props.user._id;
        this.props.sendMessage({content, from, to});
        this.setState({content: ''});

    };

    render() {
        const targetId = this.props.match.params.userid;
        const Item = List.Item;
        const {users, chatMsgs} = this.props.chat;
        if(!users[targetId]){
            return null ;   //如果users中没有数据，暂时不做任何显示
        }
        const {user} = this.props;
        const meId = user._id;
        const chatId = [targetId, meId].sort().join("_");
        //对chatMsgs进行过滤得到我与targetId的所有chatMsg数组
        const msgs = chatMsgs.filter(msg => msg.chat_id===chatId);
        const targetIcon = users[targetId] ? require(`../../assets/imgs/${users[targetId].header}.png`) : null
        return (
            <div id='chat-page'>
                <NavBar
                    className='sticky-header'
                    icon={<Icon type='left'/>}
                    onLeftClick={() => this.props.history.goBack()}
                >
                    {users[targetId].username}
                </NavBar>
                <List style={{marginBottom: 50, marginTop: 50}}>
                    {
                        msgs.map(msg => {
                            console.log(msg);
                            if (msg.to === meId) {
                                return (
                                    <Item
                                        key={msg._id}
                                        thumb={targetIcon}
                                    >
                                        {msg.content}
                                    </Item>
                                )
                            } else {
                                return (
                                    <Item
                                        key={msg._id}
                                        className='chat-me'
                                        extra='我'
                                    >
                                        {msg.content}
                                    </Item>
                                )
                            }
                        })
                    }
                </List>

                <div className='am-tab-bar'>
                    <InputItem
                        placeholder="请输入"
                        onChange={val => this.setState({content: val})}
                        value={this.state.content}
                        extra={
                            <span onClick={this.send}>发送</span>
                        }
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user, chat: state.chat}),
    {sendMessage}
)(Chat);