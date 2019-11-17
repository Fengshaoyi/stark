import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppIdea from './AppIdea';
import AppMall from './AppMall';
import My from './My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="yellow"
          barTintColor="white"
        >
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconhome'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconhome'></i>
              }
              title="首页"
              key="home"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <AppHome/>
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-idea'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-idea'></i>
              }
              title="灵感"
              key="idea"
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            >
              <AppIdea />
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconmall'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconmall'></i>
              }
              title="商城"
              key="Mall"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            >
              <AppMall />
          </TabBar.Item>
          <TabBar.Item
              icon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconmy'></i>
              }
              selectedIcon={
                <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont iconmy'></i>
              }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}