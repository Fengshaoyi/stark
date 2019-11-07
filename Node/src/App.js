import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Insid from './container/Insid';
import Login from './container/Login';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='main'>
                    <div className="content">
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/Insid/:id' component={Insid}/>
                        <Route path='/login' component={Login}/>
                    </div>
                    <div className="slider">
                    </div>
                </div>
            </Router>
        )
    }
}
