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
  View
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
/*导入外部组件*/
import LaguchImage from './Component/Main/XMGLaunchImage'; 
import Main from './Component/Main/XMGMain';
export default class flyingpig extends Component {
  render() {
    return (
        <Navigator
            style={styles.navigatorStyle}
            //这个指定了默认的页面，也就是启动的组件页面
            initialRoute={  
              {
                  title : '启动页',
                  component: LaguchImage, //具体的版块
              }
            }
            configureScene={(route) => {
                return Navigator.SceneConfigs.FadeAndroid;
            }}
            renderScene={(route, navigator) => { 
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('flyingpig', () => flyingpig);
