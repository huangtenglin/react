import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';

import {withRouter} from 'react-router-dom';

class NavFooter extends Component {

    render() {
        const navList = this.props.navList.filter((nav)=>!nav.hide);
        const path = this.props.location.pathname;
        return (
            <div>
                <TabBar>
                    {
                        navList.map(nav => (
                            <TabBar.Item key={nav.path}
                                         title={nav.text}
                                         icon={{uri: require(`./imgs/${nav.icon}.png`)}}
                                         selectedIcon={{uri: require(`./imgs/${nav.icon}-selected.png`)}}
                                         selected={nav.path===path}
                                         onPress={() => this.props.history.replace(nav.path)}
                            />
                        ))
                    }
                </TabBar>
            </div>
        )
    }
}
export default withRouter(NavFooter);