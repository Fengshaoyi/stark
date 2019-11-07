  
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Job from './Job';

export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className='header2'>
                    <Link to={url+'/all/1'} className='link'>全部</Link>
                    <Link to={url+'/good'} className='link'>精华</Link>
                    <Link to={url+'/share'} className='link'>分享</Link>
                    <Link to={url+'/job'} className='link'>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}/all/:page`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/job`} component={Job} />
                    <Route path={`${url}/share`} component={Share} />
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
            </div>
        )
    }
}