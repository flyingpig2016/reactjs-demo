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
  Dimensions
} from 'react-native';
/**导入外部组件 */
import Main from '../Main/XMGMain';
var {width,height} = Dimensions.get('window');
var Launch = React.createClass({
  render() {
    return ( 
        <Image source={{uri:'launchimage'}} style={styles.launchImgStyle} style={{width:width,height:height}} /> 
    );
  },
  componentDidMount(){
    //定时：隔2s切换到Main
    setTimeout(()=>{
        //页面的跳转
        this.props.navigator.replace({
            component:Main,  //具体路由的版块
        })
    },2000)
  }
})

const styles = StyleSheet.create({
  launchImgStyle:{
      flex:1,
  }
});
module.exports = Launch;
