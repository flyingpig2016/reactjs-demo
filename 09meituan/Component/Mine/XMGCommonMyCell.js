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
} from 'react-native';

var MyCell = React.createClass({
    getDefaultProps(){
      return{
        leftIconName :'',
        leftTitle : '',
        rightIconName : '',
        rightTitle : '',
      }
    },
    render(){
        return (
            <TouchableOpacity acitveOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle} />
                        <Text style={styles.leftTItleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        ) 
    },
    rightSubView(){
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                <View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginLeft:10}} />
                </View>
            </View>
        )
    },
    renderRightContent(){
        if(this.props.rightIconName.length === 0){
            return (
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}} />
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    },
    leftTitleStyle:{

    },
    leftImgStyle:{
        width:24,
        height:24,
        borderRadius:12,
        marginRight:8,
    },
    rightViewStyle:{
        marginRight:10
    }
});
module.exports = MyCell;
