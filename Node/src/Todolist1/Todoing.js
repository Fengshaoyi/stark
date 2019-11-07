import React, { Component } from 'react'
export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <Fragment>
                <h2>正在进行<span>{this.props.todocount}</span> </h2>
                <ol>
                {
                    todo.map((item,content) => {
                        if(!item.done){
                            return(
                                <li key={content}>
                                    <input type='checkbox' onClick={()=>this.props.change(content)}/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(content)}>-</a>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ol>
                
                <h2>已经完成 <span>{this.props.donecount}</span> </h2>
                <ul> 
                {
                    todo.map((item,content) => {
                        if(item.done){
                            return(
                                <li key={content}>
                                    <input type='checkbox' onClick={()=>this.props.change(content)} checked="checked"/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(content)}>-</a>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ul>
            </Fragment>
        )
    }
}
