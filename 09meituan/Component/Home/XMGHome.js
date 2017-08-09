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
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform
} from 'react-native';
/*------导入外部组件类-----*/
import HomeDetail from './XMGHomeDetail';

var {width,height} = Dimensions.get('window');
var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/*首页导航条*/}
        <View>
          {this.renderNavBar()}        
        </View>
        <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
          <Text>
            首页 
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
  renderNavBar(){
    return(
      <View style={styles.navBarStyle}>
        {/*左边*/}
        <TouchableOpacity onPress={()=>{alert('点我干嘛')}}>
          <Text style={{color:'#fff'}}>北京</Text>
        </TouchableOpacity>
        {/*中间*/}
        <TextInput 
          style={styles.topInputStyle}
          placeholder="输入商家、品类、商圈"
          underlineColorAndroid="transparent"
        />
        {/*右边*/}
        <View style={styles.topRIghtImgStyle}>
          <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} /> 
          <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
        </View>
      </View>
    )
  },
  pushToDetail(){
    this.props.navigator.push(
      {
        component:HomeDetail, //要跳转的版块
        title : 'home详情页'
      }
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navBarStyle:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height:Platform.OS=='ios' ? 64 : 54,
    backgroundColor:'rgba(255,96,0,1.0)',
  },
  topInputStyle:{
    width:width*0.6,
    height:35,
    backgroundColor:'#fff',
    borderRadius:18,
    paddingLeft:Platform.OS=='ios' ? 10 : 20,
  },
  topRIghtImgStyle:{
    flexDirection:'row',
  },
  navRightImgStyle:{
    width:Platform.OS=='ios' ? 28 : 25,
    height:Platform.OS=='ios' ? 28 : 25,
    marginLeft:10
  },

});
module.exports = Home;
