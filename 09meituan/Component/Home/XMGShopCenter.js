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
import BottomCommonCell from './XMGBottomCommonCell';
import Home_D5 from '../../LocalData/XMG_Home_D5.json';
var {width,height} = Dimensions.get('window');
var ShopCenter = React.createClass({
    getDefaultProps(){
        return{
            popTopHomeView : null, //回调函数
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <BottomCommonCell 
                    leftIcon = 'gw'
                    leftTitle = '购物中心'
                    rightTitle = {Home_D5.tips}
                />
                <ScrollView
                    contentContainerStyle ={styles.scrollViewStyle}
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    renderAllItem(){
        var itemArr = [];
        //取出数据
        var shopData = Home_D5.data;
        //遍历
        for(var i=0; i<shopData.length; i++){
            var data = shopData[i];
            //创建组件装入数组
            itemArr.push(
                <ShopCenterItem 
                    key={i}
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName = {data.name}
                    detailurl = {data.detailurl}
                    popTopShopCenter = {(url)=>this.popTopHome(url)}
                />
            )
        }
        return itemArr;
    },
    popTopHome(url){
        if(this.props.popTopHomeView === null) return;
        //执行回调函数
        this.props.popTopHomeView(url);
    }
})
//每一个商场
var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popTopShopCenter : null
        }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>{this.clickItem(this.props.detailurl)}}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle} />
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    clickItem(url){
        if(this.props.detailurl === null) return;
        //执行回调函数
        this.props.popTopShopCenter(url);
    }
})
const styles = StyleSheet.create({
    container:{

    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'#fff',
    },
    imageStyle:{
        width:110,
        height:90,
        borderRadius:8,
    },
    itemViewStyle:{
        margin:5,
    },
    shopSaleStyle:{
        //绝对定位
        position:'absolute',
        left : 0, 
        bottom:30,
        backgroundColor:'#FF9507',
        color:'#fff',
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:3,
    }
});
module.exports = ShopCenter;
