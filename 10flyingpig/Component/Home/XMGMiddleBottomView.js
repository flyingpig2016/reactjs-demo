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
import Home_D4 from '../../LocalData/XMG_Home_D4.json'
var {width,height} = Dimensions.get('window');
var MiddleBottomView = React.createClass({
    getDefaultProps(){
        return {
            popTopHome: null,
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    renderBottomItem(){
        //组件数组
        var itemArr = [];
        //拿到对应的数据
        var dataArr = Home_D4.data;
        for(var i=0; i<dataArr.length; i++){
            //去出单独的数据
            var itemData = dataArr[i];
            //创建组件，装入数组
            itemArr.push(
                <CommonView 
                    key={i} 
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.delWidthImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl = {itemData.tplurl}
                    callBackClickCell = {(data)=>this.popToTopView(data)}
                />
            )
        }
        return itemArr;
    },
    delWidthImgUrl(url){
        if(url.indexOf('w.h')===-1){
            return url;
        }else{
            return url.replace('w.h','200.200');
        }
    },
    //继续往父级页面传递数据
    popToTopView(data){
        //继续执行回调函数
        this.props.popTopHome(data);
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#e8e8e8',
  },
  topViewStyle:{

  },
  bottomViewStyle:{

    //设置主轴的方向
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
module.exports = MiddleBottomView;
