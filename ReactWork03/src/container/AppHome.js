import React, { Component } from 'react'
import { NavBar, Icon,Carousel } from 'antd-mobile';
import { WingBlank } from 'antd-mobile';

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >住吧家居</NavBar>
            <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
              className='carousel'
            >
              {this.state.data.map(val => (
                  <img
                    // src={`./img1/${val}.png`}
                    src={require(`./img1/${val}.png`)}

                    alt=""
                    style={{ width: '100%', verticalAlign:    'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
              ))}
            </Carousel>
            
          </WingBlank>
            <div className='mid'>
              <img src={require(`./img1/3.png`)} className='pic1'/>
              <img src={require(`./img1/4.png`)} className='pic1'/>
              <img src={require(`./img1/5.png`)} className='pic1'/>
            </div>
            <div className='hot'>
              <div className='bar'></div>
              <p className='hot-text'>热门推荐</p>
            </div>
            <div className='eng'>
              <img src={require(`./img1/6.png`)}/>
              <p className='eng-text'>什么是英伦装修风格</p>
            </div>
                
            </div>
        
        )
    }
}