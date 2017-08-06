/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TabBarIOS, 
  NavigatorIOS
} from 'react-native';   
//引入外部的组件 
var Home = require('./XMGHome');
var Find = require('./XMGFind');
var Message = require('./XMGMessage');
var Mine = require('./XMGMine');

class Main extends Component {
  constructor(){
    super();
    this.state = {
      selectedItemTag : 'home',
    }
  };
  render() { 
    return ( 
      <TabBarIOS 
        tintColor='orange'
      >
        {/*首页*/}
        <TabBarIOS.Item
          icon={require('../imgs/TabBar/tabbar_hom.png')}
          title='首页'
          selected={this.state.selectedItemTag=='home'}
          onPress={()=>{this.setState({selectedItemTag:'home'})}}
        >
          <NavigatorIOS 
            tintColor='orange'
            style={{flex:1}}
            initialRoute={
              {
                component:Home, //具体的版块
                title : '网易',
                leftButtonIcon : require('../imgs/NavigationBar/navigationbar_friendattention.png'),
                rightButtonIcon : require('../imgs/NavigationBar/navigationbar_pop.png')
              }
            }
          />
        </TabBarIOS.Item>
        {/*发现*/}
        <TabBarIOS.Item
          icon={require('../imgs/TabBar/tabbar_discover.png')}
          title='发现'
          selected={this.state.selectedItemTag=='discover'}
          onPress={()=>{this.setState({selectedItemTag:'discover'})}}
        >
          <NavigatorIOS 
            style={{flex:1}}
            initialRoute={
              {
                component:Find, //具体的版块
                title : '发现',
              } 
            }
          />
        </TabBarIOS.Item>
        {/*消息*/}
        <TabBarIOS.Item
          icon={require('../imgs/TabBar/tabbar_message_center.png')}
          title='消息'
          selected={this.state.selectedItemTag=='message'}
          onPress={()=>{this.setState({selectedItemTag:'message'})}}
        >
          <NavigatorIOS 
            style={{flex:1}}
            initialRoute={
              {
                component:Message, //具体的版块
                title : '消息'
              }
            }
          />
        </TabBarIOS.Item>
        {/*我的*/}
        <TabBarIOS.Item
          icon={require('../imgs/TabBar/tabbar_profile.png')}
          title='我的'
          selected={this.state.selectedItemTag=='mine'}
          onPress={()=>{this.setState({selectedItemTag:'mine'})}}
        >
          <NavigatorIOS 
            style={{flex:1}}
            initialRoute={
              {
                component:Mine, //具体的版块
                title : '我的'
              }
            }
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = Main;