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

var {width,height} = Dimensions.get('window');
var BottomCommonCell = React.createClass({
    getDefaultProps(){
        return{
            leftIcon : '',
            leftTitle : '',
            rightTitle : '',
        }
    },
    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('我是'+this.props.leftTitle)}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23,marginRight:5}} />
                        <Text>{this.props.leftTitle}</Text>
                    </View> 
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'green'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginLeft:5}} />
                    </View>
                </View> 
            </TouchableOpacity>
        );
    },
})

const styles = StyleSheet.create({
    container:{
        height:44,
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#fff',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{ 
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,
    }
});
module.exports = BottomCommonCell;
