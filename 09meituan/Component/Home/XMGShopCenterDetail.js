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
var ShopCenterDetail = React.createClass({
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={()=>{this.popHomeView()}} style={{width:100,height:30,backgroundColor:'orange'}}>
                    <Text>点我返回</Text>
                </TouchableOpacity>
                
            </View>
        );
    },
    popHomeView(){
        this.props.navigator.pop();
    },
    renderNavBar(){
        return(
        <View style={styles.navBarStyle}>
            <Text></Text>
        </View>
        )
    },

})

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ccc'
    }
});
module.exports = ShopCenterDetail;
