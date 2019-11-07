import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
export default class Good extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                    })
        }
    }
        
    click=(e)=>{
        fetch('https://cnodejs.org/api/v1/topics?tab=all&page='+e)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })                
            })
    }

    render() {
        return (
            <div>
                {
                this.state.data.map((item)=>(
                    // <div>
                    //     <Link dangerouslySetInnerHTML={{__html:item.title}}></Link>
                    // </div>
                    <div className='content1'>
                        <img src={item.author.avatar_url}  className='photo' />
                        <span className='num1'>{item.reply_count}/<span className='num2'>{item.visit_count}</span></span>
                        <Link  to={`/Insid/${item.id}`} className='content2'  style={{color: '#000'}}>{item.title}</Link>
                        <span className='time'>{item.last_reply_at}</span>
                    </div>
                    
                ))
                }
                <div className="pages">
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <div  className="pages1" key={item} onClick={()=>(this.click(item))}>{item}</div>
                            ))
                        }
                </div>
                <div className="bottom"></div>
            </div>
        )
    }
}