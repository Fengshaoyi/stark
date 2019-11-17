import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import { Tabs} from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
  ];
export default class AppIdea extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div className='idea1'>
                        <img src={require(`./img2/1.png`)}/>
                        <img src={require(`./img2/1.png`)}/>
                        <img src={require(`./img2/1.png`)}/>
                        <img src={require(`./img2/1.png`)}/>
                    </div>
                    <div style={{ height: '150px' }}>
                        Content of second tab
                    </div>
                    <div style={{ height: '150px' }}>
                        Content of third tab
                    </div>
                    <div style={{ height: '150px' }}>
                        Content of four tab
                    </div>
                </Tabs>
            </div>
            
        )
    }
    
}

