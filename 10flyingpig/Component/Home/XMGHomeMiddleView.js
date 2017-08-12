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
import CommonView from './XMGMiddCommonView';
import topMiddleData from '../../LocalData/HomeTopMiddleLeft.json';
var {width,height} = Dimensions.get('window');
var HomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRIghtView()}
                </View>
            </View>
        )
    },
    renderLeftView(){
        var data = topMiddleData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{alert(1)}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle} />
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
                    <Text>{data.title}</Text>
                    <View style={{flexDirection:'row',marginTop:5,}}>
                        <Text style={{color:'#36B6F4',marginRight:5}}>{data.price}</Text>
                        <Text style={{color:'red',backgroundColor:'#FFE507'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    },
    renderRIghtView(){
        //组件数组
        var itemArr = [];
        var rightData = topMiddleData.dataRight;
        //遍历
        for(var i=0; i<rightData.length; i++){
            var data = rightData[i];
            itemArr.push(
                <CommonView key={i} 
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                />
            )
        }
        return itemArr;
    }
})

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:15,
    },
    leftViewStyle:{
        width:width/2,
        height:119,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    leftImageStyle:{
        width:86,
        height:28,
    }
});
module.exports = HomeMiddleView ;
