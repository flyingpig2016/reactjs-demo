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
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import CommonCell from './XMGCommonCell';
var Mine = React.createClass({
  getInitialState(){
    return {
      dataCache : 1.1
    }
  },
  render() {
    return (
      <View style={styles.container}> 
        {/*导航条*/}
        {this.renderNavBar()}
        <ScrollView>
          <View style={{marginTop:15}}>
            <CommonCell title='扫一扫' />
          </View>
          
          <View style={{marginTop:15}}>
            <CommonCell title='省流量模式' isSwitch={true}/>
          </View>
          <View>
            <CommonCell title='消息提醒' />
          </View>
          <View>
            <CommonCell title='邀请好友使用flyingpig电商' />
          </View>
          <View >
            <CommonCell title='清空缓存' rightText={this.state.dataCache} />
          </View>

          <View style={{marginTop:15}}>
            <CommonCell title='意见反馈' />
          </View>
          <View>
            <CommonCell title='问卷调查' />
          </View>
          <View>
            <CommonCell title='支付帮助' />
          </View>
          <View>
            <CommonCell title='网络诊断' />
          </View>
          <View>
            <CommonCell title='关于我们' />
          </View>
          <View>
            <CommonCell title='我要应聘'/>
          </View>

          <View style={{marginTop:15}}>
            <CommonCell title='精品应用'/>
          </View>
        </ScrollView>
      </View>
    );
  },
  renderNavBar(){
    return (
      <View style={styles.navOutViewStyle}>
        <Text style={styles.moreStyle}>更多</Text>
        <TouchableOpacity onPress={()=>{alert('点我干嘛！')}} style={styles.rightViewStyle}>
          <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
        </TouchableOpacity>
      </View>

    )  
  }
})

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e8e8e8',
  },
  navOutViewStyle:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:Platform.OS=='ios' ? 64 : 54,
    backgroundColor:'rgba(255,96,0,1.0)',
  },
  moreStyle:{
    fontSize:16,
    color:'#fff',
  },
  rightViewStyle:{
    position:'absolute',
    right:10,
  },
  navImageStyle:{
    width:Platform.OS=='ios' ? 28 : 25,
    height:Platform.OS=='ios' ? 28 : 25,
  }
});
module.exports = Mine;
