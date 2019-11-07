import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
            <div>
                <h2>用户名：<input type='text'/></h2>
                <h2>密码：<input type='password'/></h2>
                <button className='login'><Link to='home' className='p'>登陆</Link></button>
            </div>
        )
    }
}
