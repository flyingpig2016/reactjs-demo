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
import TopListView from './XMGTopListView';
import TopMenu from '../../LocalData/TopMenu.json';
var {width,height} = Dimensions.get('window');
var TopView = React.createClass({
    getInitialState(){
        return{
            activePage: 0,
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollanimationEnd}
                >
                    {this.renderScrollItem()} 
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderScrollItem(){
        //组件数组
        var itemArr = [];
        var dataArr = TopMenu.data;
        // console.log(dataArr)
        //定义颜色数组
        var colorArr = ['red','green'];
        for(var i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView 
                    key={i}
                    dataArr={dataArr[i]}
                />
            );
        }
        //返回组件数组
        return itemArr;
    },
    //页码指示器
    renderIndicator(){
        //指示器数组
        var indicatorArr = [], style;
        //遍历创建组件
        for(var i=0; i<2; i++){
            style = (i===this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25,height:20},style]}>&bull;</Text> 
            )
        }
        return indicatorArr;
    },
    onScrollanimationEnd(e){
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        console.log(currentPage)
        //更新状态机
        this.setState({
            activePage:currentPage
        })
    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center',   
        alignItems:'flex-end' ,
        marginBottom:5,
    },
});
module.exports = TopView;
