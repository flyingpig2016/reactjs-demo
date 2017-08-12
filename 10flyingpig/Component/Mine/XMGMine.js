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
import MyCell from './XMGCommonMyCell';
import MineMiddleView from './XMGMineMiddleView';
import MineHeader from './XMGMineHeaderView';
var Mine = React.createClass({
  render() {
    return (
      <ScrollView
        style={styles.scrollViewStyle}
        contentInset = {{top:-200}}
        contentOffset = {{y:200}}
      >
        <MineHeader />
        <View>
          <MyCell 
          leftIconName = 'collect'
          leftTitle = '我的订单'
          rightIconName = ''
          rightTitle = '查看全部订单'
          />
          <MineMiddleView />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
          leftIconName = 'draft'
          leftTitle = '我的钱包'
          rightIconName = ''
          rightTitle = '账户余额:￥10.00'
          />
        </View>
        <View>
          <MyCell 
            leftIconName = 'like'
            leftTitle = '抵用券'
            rightTitle = '10张'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            leftIconName = 'card'
            leftTitle = '积分商城'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            leftIconName = 'new_friend'
            leftTitle = '今日推荐'
            rightIconName = 'me_new'
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell 
            leftIconName = 'pay'
            leftTitle = '我要合作'
            rightTitle = '轻松开店,招财进宝'
          />
        </View>
        
      </ScrollView>
    );
  },

})

const styles = StyleSheet.create({
  scrollViewStyle:{
    backgroundColor:'#e8e8e8',
  },
});
module.exports = Mine;
