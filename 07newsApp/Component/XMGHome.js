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
  ListView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'; 
import LocalData from '../LocalData.json';
import ScrollImage from './XMGScrollImage';
import NewsDetail from './XMGNewsDetail';
var {width} = Dimensions.get('window');
var Home = React.createClass({
    getDefaultProps(){
       return {
          url_api: "http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html",
          key_word: 'T1348647853363'
       }
    },
  // 初始化方法
  getInitialState(){
      return {
          // ListView头部的数据源
          headerDataArr: [],
          // cell的数据源
          dataSource: new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
          })
      }
  },
  render() { 
    return ( 
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
      />
    );
  },
  componentDidMount(){
    this.loadDataFromNet();
  },
  loadDataFromNet(){
    fetch(this.props.url_api)
      .then((response)=>response.json())
      .then((responseData)=>{
        var jsonData = responseData[this.props.key_word];
        this.dealWithData(jsonData);
      })
      .catch((error)=>{
        // console.log(error);
        if(error){
          //特殊处理
          var jsonData = LocalData[this.props.key_word];
          this.dealWithData(jsonData);
        }
      })
  },
  dealWithData(jsonData){
    // console.log(jsonData) //所有的数据
    var headerArr = [], listDataArr = [];
    for(var i=0; i<jsonData.length; i++){
      var data = jsonData[i];
      //判断
      if(data.hasHead == 1){ //取出广告数据
        headerArr = data.ads;
      }else{
        listDataArr.push(data);
      }
    }
    // console.log(headerArr,listDataArr)
    //更新状态机
    this.setState({
      //ListView头部的数据源
      headerDataArr : headerArr,
      //cell的数据
      dataSource : this.state.dataSource.cloneWithRows(listDataArr)
    })
    // console.log(this.state.headerDataArr)
  },
  // 头部
  renderHeader(){
    // 判断
    if (this.state.headerDataArr.length == 0) return;
    return(
        <ScrollImage
            imageDataArr = {this.state.headerDataArr}
        />
    );
  },
  renderRow(rowData){
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToNewDetail(rowData)}}>
          <View style={styles.cellViewStyle}>
            {/*左边*/}  
            <Image source={{uri:rowData.imgsrc}} style={styles.imageStyle} />
            {/*右边*/}  
            <View style={styles.rightViewStyle}>
              {/***/}  
              <Text style={styles.titleStyle}>{rowData.title}</Text>
              <Text style={styles.subTitleStyle} numberOfLines={1}>{rowData.digest}</Text>
              <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
              {/***/} 
            </View> 
          </View>
        </TouchableOpacity>
    )
  },
  //跳转到新闻详情页 
  pushToNewDetail(rowData){
    const {navigator} = this.props; 
    if(navigator){
      /**页面间数据的传递 与将第二个页面如何将结果返回给第一个页面的方法 
       *  
       * 1.通过push,传递参数 
       *   这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数... 
       *   id 
       * 2.把上一个页面的实例或者回调方法，作为参数传递到当前页面来，在当前页面操作上一个页面的state 
       */  
      navigator.push({ //拿到当前页面的导航
        title:rowData.title, //传到detail页面的标题 
        name:'NewsDetail',
        component : NewsDetail,
        params:{
          rowData:rowData,  //终完成了数据传递到Detail页面n
        }
      })
    }
  }

});

const styles = StyleSheet.create({
  cellViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderBottomWidth:0.5,
    borderColor:'#ccc'
  },
  rightViewStyle:{
    width:width-100,
    height:90,
    paddingLeft:10,
    paddingRight:10,
  },
  imageStyle:{
    width:80,
    height:80
  },
  titleStyle:{
    fontSize:15,
    marginBottom:5,
    fontWeight:'600'
  },
  subTitleStyle:{
    color:'grey',
  },
  flowTitleStyle:{
    position:'absolute',
    right:10,
    bottom:0,
    borderWidth:0.5,
    borderColor:'#ccc',
    borderRadius:5,
    padding:3,
    color:'gray'
  }
});

module.exports = Home;