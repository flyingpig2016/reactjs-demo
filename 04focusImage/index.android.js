/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,  //注册
  StyleSheet,   //样式       
  Text,     //文本组件
  View,     //视图组件
  Image,    //图片组件
  Dimensions,  //获取屏幕信息
  TextInput,  
} from 'react-native';
//引入外部文件,注意开头用大写
// var LoginView = require('./loginView');
// var Touchable = require('./touchable');
// var Touchable = require('./touchable');
// var CrollView = require('./scrollView');
var FocusView = require('./focusView');
class Hello extends Component {
  render() { 
    return (
      // <LoginView />
      // <Touchable />
      // <CrollView />
      <FocusView />
    )
  }
}
 
AppRegistry.registerComponent('Hello', () => Hello);        
