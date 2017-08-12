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
  Platform,
  ScrollView
} from 'react-native';
/*------导入外部组件类-----*/
import HomeDetail from './XMGHomeDetail';
import TopView from './XMGTopView';
import HomeMiddleView from './XMGHomeMiddleView';
import MiddleBottomView from './XMGMiddleBottomView';
import dataArr from '../../LocalData/XMG_Home_D4.json';
import ShopCenter from './XMGShopCenter';
import BottomCommonCell from './XMGBottomCommonCell';
import ShopCenterDetail from './XMGShopCenterDetail';
import GeustLike from './XMGGeustLike';
import Map from './XMGMap';
var {width,height} = Dimensions.get('window');
var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/*首页导航条*/}
          {this.renderNavBar()}  
          {/*首页主要内容*/}      
            {/*头部的组件*/}
          <ScrollView 
            showsHorizontalScrollIndicator ={false}
          >
            <TopView />
            {/*中间的内容*/}
            <HomeMiddleView />
            {/*下半部分*/}
            <MiddleBottomView 
              popTopHome = {(data)=>{this.pushToDetail(data)}}
            />
            {/*购物中心*/}
            <ShopCenter 
              popTopHomeView = {(url)=>{this.pushToShopCenterDetail(url)}}
            />
            <GeustLike />
          </ScrollView> 
      </View>
    );
  },
  renderNavBar(){
    return(
      <View style={styles.navBarStyle}>
        {/*左边*/}
        <TouchableOpacity onPress={this.pushToMap}>
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
  pushToMap(){
    this.props.navigator.push(
      {
        component : ShopCenterDetail,
        passProps : {
          detailUrl: '//i.meituan.com/index/changecity',
        }
      }
    )
  },
  pushToShopCenterDetail(url){
    this.props.navigator.push(
      {
        component : ShopCenterDetail,  
        passProps : {
          'url' : this.dealWidthUrl(url)
        }
      }
    )
  },
  dealWidthUrl(url){
    return url.replace('imeituan://www.meituan.com/web/?url=','')
  },
  pushToDetail(data){
    this.props.navigator.push(
      {
        title : 'home详情页',
        component:HomeDetail, //要跳转的版块
        passProps : {
          tplurl:data
        }
      }
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#e8e8e8',
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
