// import React from 'react'
// //无状态组件
// export default function Content(props) {
//     function toHoc(){
//         props.history.push('/hoc');
//     }
//         return (
//             <div>
//                 {props.children}
//                 Content
//                 {/**{props.match.params.id} */}

//                 <button onClick={toHoc}>跳转到hoc组件</button>
//             </div>
//         )
// }

import React from 'react';

export default class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
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
                {/* {
                    this.state.data.map((item)=>(
                        <div  style='marginLeft: 50,float: 'left',border: '2px solid red'>
                            <h2>{item.tittle}</h2>
                            <div dangerouslySetInnerHTML={{_}}>{item.content}</div>
                        </div>
                    ))
                } */}

            </div>
        )
    }
}

