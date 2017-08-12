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
  Switch
} from 'react-native';

var CommonCell = React.createClass({
    getDefaultProps(){
        return{
            title:' ', //标题
            isSwitch:false, //是否展示开关
            rightText: 0
        }
    },
    getInitialState(){
        return {
            isOn : false,
        }
    },
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    //cell右边显示的内容
    renderRightView(){
        //判断是否返回按钮
        if(this.props.isSwitch){
            return (
                <Switch 
                    value={this.state.isOn===true} 
                    onValueChange={()=>{this.setState({isOn: ! this.state.isOn})}} 
                />
            )
        }else if(this.props.rightText){
            return(
                <View style={styles.rightTextStyle}>
                    <Text style={{marginRight:10}}>{this.props.rightText}M</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImgStyle}/> 
                </View>

            )
        }else{
            return (
                <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImgStyle}/> 
            )
        }
    }
})

const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'#fff',
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5, 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    rightTextStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightImgStyle:{
        width:8,
        height:13,
        marginRight:10
    }
});
module.exports = CommonCell;
