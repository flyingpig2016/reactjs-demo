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
class loginView extends Component {
  render() {
    return (   
      <View style={styles.container}>
        {/*头像*/}
        <Image source={require('./img/1.jpg')} style={styles.iconStyle}/>
        {/*账号密码*/}
        <TextInput placeholder={'请输入用户名'} underlineColorAndroid="transparent" style={styles.textInputStyle}/>
        <TextInput placeholder={'请输入密码'} password={true} underlineColorAndroid="transparent" style={styles.textInputStyle}/>
        {/*登陆*/}
        <View style={styles.loginBtnStyle} >
          <Text style={styles.loginText}>登陆</Text>
        </View>
        {/*设置*/}
        <View style={styles.settingStyle}>
          <Text style={{color:'#168EFA'}}>无法登陆</Text>
          <Text style={{color:'#168EFA'}}>新用户</Text>
        </View>
        {/*其他登录方式*/}
        <View style={styles.otherLoginStyle}> 
          <Text>其他登录方式:</Text>
          <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
          <Image source={require('./img/icon7.png')} style={styles.otherImageStyle}/>
          <Image source={require('./img/icon8.png')} style={styles.otherImageStyle}/>
        </View>
      </View>
    );
  }
}
var {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ddd',
    alignItems : 'center'
  },  
  iconStyle : {
    width:80,
    height:80,
    marginTop:50,
    marginBottom:30,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white'
  },
  textInputStyle : {
    width:width,
    backgroundColor:'white',
    marginBottom:1,
  },
  loginBtnStyle : {
    width:350,
    height:35,
    marginTop:30,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#168EFA',
    borderRadius:8
  }, 
  loginText : {
    color:'white',
    fontWeight:'bold',
  },
  settingStyle : {
    width:350,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  otherLoginStyle : {
    flexDirection:'row',
    alignItems:'center',
    //绝对定位
    position:'absolute',
    top:height-100,
    left:20,
  },
  otherImageStyle : {
    width:50,
    height:50,
    borderRadius:25,
    marginLeft:8
  }
});

module.exports = loginView;  
