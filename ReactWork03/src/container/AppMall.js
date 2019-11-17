import React, { Component } from 'react'
import { NavBar, Icon,Carousel,SearchBar } from 'antd-mobile';
import { WingBlank } from 'antd-mobile';

export default class AppMall extends Component {
    state = {
        data: ['1','1'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1','1'],
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
                    >商城</NavBar>
                <div className='top'>
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
                    src={require(`./img3/${val}.png`)}

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
            
            <SearchBar placeholder="Search" maxLength={8} className='search'/>

            </div>


            <div className='mid2'>
              <div className='zhuo'>
                <img src={require(`./img3/zhuo.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/yi.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/shujia.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/shipin.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/shafa.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/jiaju.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/ji.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/gui.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/chuang.png`)}/>
                <p>桌</p>
              </div>
              <div className='zhuo'>
                <img src={require(`./img3/all-icon.png`)}/>
                <p>桌</p>
              </div>
            </div>

            <div className='mid3'>
              <div className='mid4'>
                <img src={require(`./img3/2.png`)}/>
                <p>欧式风格精细杯子<br/><span>$39.95</span> </p>
                
              </div>
              <div className='mid4'>
                <img src={require(`./img3/3.png`)}/>
                <p>欧式风格精细杯子<br/><span>$39.95</span></p>
              </div>
            </div>

            </div>
        )
    }
}
