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
  TouchableOpacity
} from 'react-native';    
 
import TabBar from 'react-native-xtabbar';
import {Navigator,TouchableHighlight} from "react-native-deprecated-custom-components";
//引入外部的组件 
import Home from './XMGHome';   
import Find from './XMGFind';
import Message from './XMGMessage';
import Mine from './XMGMine';
var {width} = Dimensions.get('window');
class Main extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      
    }
  };
  renderNavBarHome(){
    var routeMapper = {
          LeftButton: (route, navigator, index, navState) =>{
            return (
              <TouchableOpacity  style={styles.homeButtonStyle} >
                <Image 
                  source={require('../imgs/NavigationBar/navigationbar_friendattention_highlighted.png')} 
                  style={styles.buttonImageStyle}
                />
              </TouchableOpacity>
            ); 
            },
          RightButton: (route, navigator, index, navState) =>{
            return (
              <TouchableOpacity style={styles.homeButtonStyle}>
                <Image 
                  source={require('../imgs/NavigationBar/navigationbar_pop_highlighted.png')} 
                  style={styles.buttonImageStyle} 
                />
              </TouchableOpacity>
            ); 
          },
          Title: (route, navigator, index, navState) =>{
            return (
              <View style={styles.homeTitleStyle}>
                <Text style={styles.homeButtonText}>Home</Text>
              </View>
            ); 
          },
    }
    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navigationBarStyle}
      />
    )
  }
  renderNavBarFind(){
    var routeMapper = {
          LeftButton: (route, navigator, index, navState) =>{

            },
          RightButton: (route, navigator, index, navState) =>{

          },
          Title: (route, navigator, index, navState) =>{
            return (
              <View style={styles.homeTitleStyle}>
                <Text style={styles.homeButtonText}>Find</Text>
              </View>
            ); 
          },
    }
    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navigationBarStyle}
      />
    )
  }
  renderNavBarMessage(){
    var routeMapper = {
          LeftButton: (route, navigator, index, navState) =>{

            },
          RightButton: (route, navigator, index, navState) =>{

          },
          Title: (route, navigator, index, navState) =>{
            return (
              <View style={styles.homeTitleStyle}>
                <Text style={styles.homeButtonText}>Message</Text>
              </View>
            ); 
          },
    }
    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navigationBarStyle}
      />
    )
  }
  renderNavBarMine(){
    var routeMapper = {
          LeftButton: (route, navigator, index, navState) =>{

            },
          RightButton: (route, navigator, index, navState) =>{

          },
          Title: (route, navigator, index, navState) =>{
            return (
              <View style={styles.homeTitleStyle}>
                <Text style={styles.homeButtonText}>Mine</Text>
              </View>
            ); 
          },
    }
    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
        style={styles.navigationBarStyle}
      />
    )
  }
  render() { 
    return (
      <View style={styles.container}>
        <TabBar
          defaultPage={4}
          // onItemSelected={(index)=>{console.log('current itemIndex is')}}
        >
          <TabBar.Item
            title='首页' 
            icon={require('../imgs/TabBar/tabbar_hom.png')}
            selectedIcon={require('../imgs/TabBar/tabbar_home_highlighted.png')}
          >
          <Navigator
              style={styles.navigatorStyle}
              //这个指定了默认的页面，也就是启动的组件页面
              initialRoute={  
                {
                    title : 'Home',
                    component: Home , //具体的版块
                }
              }
              // 页面之间跳转时候的动画手势，可以看这个目录:node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              configureScene={(route) => {
                  return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              //route包含的是initial的时候传递的name和component
              //navigator是一个我们需要用的Navigator的对象
              renderScene={(route, navigator) => { 
                let Component = route.component;
                return <Component {...route.props} navigator={navigator} />
              }}
              navigationBar = {this.renderNavBarHome()}
          />
          </TabBar.Item>
          <TabBar.Item
            title='发现'
            icon={require('../imgs/TabBar/tabbar_discover.png')}
            selectedIcon={require('../imgs/TabBar/tabbar_discover_highlighted.png')}
          >
          <Navigator
              style={styles.navigatorStyle}
              //这个指定了默认的页面，也就是启动的组件页面
              initialRoute={  
                {
                    title : 'Find',
                    component: Find , //具体的版块
                }
              }
              // 页面之间跳转时候的动画手势，可以看这个目录:node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              configureScene={(route) => {
                  return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              //route包含的是initial的时候传递的name和component
              //navigator是一个我们需要用的Navigator的对象
              renderScene={(route, navigator) => { 
                let Component = route.component;
                return <Component {...route.props} navigator={navigator} />
              }}
              navigationBar = {this.renderNavBarFind()}
          />
          </TabBar.Item>
          <TabBar.Item
            title='消息'  
            icon={require('../imgs/TabBar/tabbar_message_center.png')}
            selectedIcon={require('../imgs/TabBar/tabbar_message_center_highlighted.png')} 
          >
          <Navigator
              style={styles.navigatorStyle}
              //这个指定了默认的页面，也就是启动的组件页面
              initialRoute={  
                {
                    title : 'Message',
                    component: Message , //具体的版块
                }
              }
              // 页面之间跳转时候的动画手势，可以看这个目录:node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              configureScene={(route) => {
                  return Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
              //route包含的是initial的时候传递的name和component
              //navigator是一个我们需要用的Navigator的对象
              renderScene={(route, navigator) => { 
                let Component = route.component;
                return <Component {...route.props} navigator={navigator} />
              }}
              navigationBar = {this.renderNavBarMessage()}
          />
          </TabBar.Item>
          <TabBar.Item
            title='我的'
            icon={require('../imgs/TabBar/tabbar_profile.png')}
            selectedIcon={require('../imgs/TabBar/tabbar_discover_highlighted.png')}
          >
          <Navigator
              style={styles.navigatorStyle}
              //这个指定了默认的页面，也就是启动的组件页面
              initialRoute={  
                {
                    title : 'Mine',
                    component: Mine , //具体的版块
                }
              }
              // 页面之间跳转时候的动画手势，可以看这个目录:node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              configureScene={(route) => {
                  return Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
              //route包含的是initial的时候传递的name和component
              //navigator是一个我们需要用的Navigator的对象
              renderScene={(route, navigator) => { 
                let Component = route.component;
                return <Component {...route.props} navigator={navigator} />
              }}
              navigationBar = {this.renderNavBarMessage()}
          />
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  navigatorStyle:{
    paddingTop: 55,
},
  navigationBarStyle:{   
    height:55,
    flexDirection:'column', 
    backgroundColor:'#F3F3F3', 
    borderBottomWidth:0.3,
  },  
  homeButtonStyle:{ 
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonImageStyle:{
    width:40,
    height:40
  },
  homeTitleStyle:{ 
    flex:1,
    width:width*0.3,
    justifyContent:'center',
    alignSelf:'center', 
  },
  homeButtonText:{
    fontSize:18,
    fontWeight:'800' 
  }
});

module.exports = Main;