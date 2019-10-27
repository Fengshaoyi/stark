import React,{Component} from 'react';

export default class Todoinput extends Component {
    handleInput = (e) => {
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    } 

    render(){
        return(
            <div id='ToDo'>
                <div id='ToDoList'>ToDoList</div>
                <input id='Input' name='input' onKeyDown={this.handleInput} type="text" placeholder="添加ToDo"/>
            </div>
        )
    }
}