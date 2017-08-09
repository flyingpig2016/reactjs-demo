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
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
var {width} = Dimensions.get('window');
var MineHeader = React.createClass({
    render() {
        return (
            <View style={styles.topViewStyle}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    },
    renderTopView(){ 
        return(
            <TouchableOpacity style={styles.topStyle} activeOpacity={0.7}>
                <Image source={{uri:'flyingpig'}} style={styles.topImgStyle}/>
                <Text style={{color:'#fff',fontSize:16}}>flyingpig </Text>
                <Image source={{uri:'avatar_vip'}} style={{width:20,height:20}}/>
                <Image source={{uri:'icon_cell_rightarrow'}} style={styles.topImgRightStyle}/>
            </TouchableOpacity>
        )
    },
    renderBottomView(){
        return(
            <View style={styles.bottomStyle}>
                <BottomView title="优惠券" number="100" />
                <BottomView title="评价" number="12" />
                <BottomView title="收藏" number="50" />
            </View>
        )
    }
})
var BottomView = React.createClass({
    getDefaultProps(){
        return {
            title :' ' ,
            number :' '
        }
    },
    render(){
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                style={styles.touchAbleStyle}
            >
                <Text style={{color:'#fff'}}>{this.props.title}</Text>
                <Text style={{color:'#fff'}}>{this.props.number}</Text>                
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    topViewStyle:{
        height:Platform.Os==='iso' ? 400 : 160
    },
    topStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:115,
        marginTop:Platform.OS==='ios' ? 280 : 0,
        backgroundColor:'#FD4B1F',
    },
    topLeftStyle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ccc'
    },
    topImgStyle:{
        width:60,
        height:60,
        borderRadius:30,
        marginLeft:10,
        marginRight:10,
    },
    topImgRightStyle:{
        width:8,
        height:12,
        position:'absolute',
        right:10,
    },
    bottomStyle:{
        flexDirection:'row',
        width:width+1,
        height:45,
        backgroundColor:'red',
        opacity:0.56,
    },
    touchAbleStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRightColor:'#fff',
        borderRightWidth:1,
    }
});
module.exports = MineHeader;
