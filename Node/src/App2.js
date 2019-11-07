import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Sider from './Sider';
import { Button } from 'antd';
import Content from './Router/Content';
// antd使用：
// 1、下载安装antd框架 ：npm i antd 
// 2、在某个css里引入antd的css：@import '~antd/dist/antd.css';
// 3、在需要的组件内import相应的组件，然后使用
export default class App extends Component {
    render() {
        return (
            <Router basename="/build">
                <div>
                    <Content />

                    
                    <Sider/>
                    <Button type="primary">Primary</Button>
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <switch>
                            <Route exact path='/' component={Todolist} />
                            <Route path='/hoc' component={Hoc} />
                            <Route path='/request' component={Request}/>
                            {/* //NoMatch一定要放在最下边 */}
                            <Route>
                                <NoMatch/>
                            </Route>
                        </switch>
                    </div>
                </div>
            </Router>
        )
    }
}
