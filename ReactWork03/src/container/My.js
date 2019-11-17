import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >我的</NavBar>
            </div>
        )
    }
}
