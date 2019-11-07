import React, { Component } from 'react'
export default class Insid extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log('p' + page);
        fetch('https://cnodejs.org/api/v1/topic/'+page)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data);
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                    })
        }
    }
    render() {
        return (
            <div>
                {

                        <div className='nr'>
                            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                        </div>
                        // <div className='content1'>
                        //     {item.content}
                        // </div>

                }
            </div>
        )
    }
}