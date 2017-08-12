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
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from "react-native-deprecated-custom-components";

import Home from '../Home/XMGHome';
import Shop from '../Shop/XMGShop';
import More from '../More/XMGMore';
import Mine from '../Mine/XMGMine';
var {width} = Dimensions.get('window');
var Main = React.createClass({
  getInitialState(){
    return {
      selectedTab : 'Home',  //默认是第一个
    }
  },
  render() {
    return (
        <TabNavigator>
          {/*首页*/}
          {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home','Home',Home)}
          {/*商家*/}
          {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','Shop','Shop',Shop)}
          {/*我的*/}
          {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','Mine','Mine',Mine)}
          {/*更多*/}
          {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','More','More',More,10)}
        </TabNavigator>

    );

  },
  renderTabBarItem(title,iconName,SelectedIconName,selectedTab,componentName,component,badgeText){
    return (
        <TabNavigator.Item
          title= {title} //需要大括号
          renderIcon={() => <Image style={styles.iconStyle} source={{uri:iconName}} />}  
          renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:SelectedIconName}} />}
          onPress={()=>this.setState({selectedTab:selectedTab})}
          selected={this.state.selectedTab === selectedTab}
          selectedTitleStyle={styles.selectedTitleStyle}
          badgeText = {badgeText}
          // renderBadge={this.renderBadge}   //自定义
        >
        
          <Navigator
              // sceneStyle={styles.navigatorStyle} 
              style={styles.navigatorStyle}
              //这个指定了默认的页面，也就是启动的组件页面
              initialRoute={  
                {
                    title : componentName,
                    component: component , //具体的版块
                }
              }
              configureScene={(route) => {
                  // return Navigator.SceneConfigs.HorizontalSwipeJump   ;//不能用这个，要不然会左右滑动
                  return Navigator.SceneConfigs.FloatFromBottom;
              }}
              renderScene={(route, navigator) => { 
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
              }}
            />
        </TabNavigator.Item>
    )
  }
})

const styles = StyleSheet.create({
  navigatorView:{
    flex:1,
    backgroundColor:"orange",
  },
  navigatorStyle: {
    flex:1,
    backgroundColor: '#F5FCFF',
  },

  iconStyle:{
    width:Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25,
  },
  selectedTitleStyle:{
    color:'orange'
  }
});
module.exports = Main;
