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
var CommonView = React.createClass({
    getDefaultProps(){
        return {
            title : '',
            subTitle:'',
            rightIcon:'',
            titleColor: '',
            tplurl : '', //下级界面的url路径
            callBackClickCell:null
        }
    },
    render() {
        return (
            <TouchableOpacity  onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.container}>
                    <View> 
                        <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43}} />
                </View>
            </TouchableOpacity>

        )
    },
    clickCell(data){
        if(this.props.callBackClickCell == null) return ;
        this.props.callBackClickCell(data)
    }
})

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:width/2-1,
        height:59,
        marginBottom:1,
        marginLeft:1,
        backgroundColor:'#fff',
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },
    subTitleStyle:{
        color:'gray'
    }
});
module.exports = CommonView ;
