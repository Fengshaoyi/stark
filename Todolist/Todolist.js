import React, {Fragment, Component} from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import './Todolist.css';
 
export default class Todolist extends Component {
    constructor() {
        super();   

        var todo = JSON.parse(localStorage.getItem('todo'));
        if (todo) {
            this.state = {
                todoList: todo,
                todocount:0,
                donecount:0
            }
        } else{
            this.state = {
                todoList: [],
                todocount:0,
                donecount:0
            }
        }
    }
    //添加项目
    addItem = (msg) => {
        var item = {"title": msg, "mark": false};
        this.setState({
            todoList: [...this.state.todoList, item]
        }, ()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todoList));//转化为字符串
        })
    }

    //删除项目
    delItem = (a) => {
        var item = this.state.todoList;
        item.splice(a, 1);
        this.setState({
            todoList: item
        });
    }

    //更改项目状态
    changeItem = (a) => {
        var item = this.state.todoList;
        item[a].done = !(item[a].done);//状态取反
        this.setState({
            todoList: item
        })
    }

    render() {
        let item = this.state.todoList;

        //事件遍历
        for(var i in item){
            if (item[i].done) {
                this.state.donecount++;
            } else {
                this.state.todocount++;
            }
        }
        localStorage.setItem('todo',JSON.stringify(this.state.todoList));

        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todoList} change={this.changeItem} todocount={this.state.todocount} donecount={this.state.donecount}/>
            </div>
        )
    }
}