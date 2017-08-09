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
  TouchableHighlight,
  Platform,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import MiddleData from './MiddleData.json';
var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem(){
        //定义组件数组
        var itemArr = [];
        for(var i=0; i<MiddleData.length; i++){
            //去出单独的数据
            var data = MiddleData[i];
            //创建组件装入数组
            itemArr.push(
                <TouchableOpacity  
                    activeOpacity={0.3}
                    style={styles.middleTouchStyle}
                >
                    <View>
                        <InnerView key={i} iconName={data.iconName} title={data.title} />
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }
})
var InnerView = React.createClass({
    getDefaultProps(){
        return{
            iconName : '',
            title : ''
        }
    },
    render(){
        return(
            <View style={styles.middleImgStyle}>
                <Image source={{uri:this.props.iconName}} style={{width:30,height:20}} />
                <Text style={styles.middleTextStyle}>{this.props.title}</Text>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:60,
        backgroundColor:'#fff',
    },
    middleImgStyle:{
        flexDirection:'column',
        alignItems:'center',
    },
    middleTouchStyle:{
        flex:1,
    },
    middleTextStyle:{
        color:'gray',
        fontSize:12,
    },
});
module.exports = MineMiddleView;
