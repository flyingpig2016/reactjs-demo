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
  WebView,
} from 'react-native'; 
import {Navigator} from "react-native-deprecated-custom-components";
var NewsDetail = React.createClass({
  getDefaultProps(){
    return{
 
    }
  },
  getInitialState(){
    return{
      //具体的数据
      detailData : '',
    }
  },
  componentDidMount() {  
    console.log(this.props.rowData)
    //请求路径
    var url_api = 'http://c.m.163.com/nc/article/'+this.props.rowData.docid+'/full.html';
    // console.log(url_api)
    fetch(url_api)
      .then((response)=>response.json())
      .then((responseData)=>{
        //处理拿到的数据
        var allData = responseData[this.props.rowData.docid];
        console.log(allData)
        //拿到boddy
        bodyHtml = allData.body;
        if(allData.img.length>0){
          for(var i=0; i<allData.img.length; i++){
            //取出单个图片对象
            var img = allData.img[i];
            //取出src
            var imgSrc = img.src;
            var imgHtml = '<img src="'+imgSrc+'" style="width:100%;margin-bottom:20;">'
            //替换body中的图像占位符
            bodyHtml = bodyHtml.replace(img.ref,imgHtml);
          }
        }
        bodyTitle = '<h3>' + allData.title + '</h3>';
        bodySource = '<p style="font-size:10;color:grey;">' + allData.source + '&emsp;&emsp;'+ allData.ptime+'</p>';
        bodyHtml = bodyTitle + bodySource + bodyHtml;
        // 更新状态机
        this.setState({ 
          detailData : bodyHtml
        })
        
      })
      .catch((error)=>{

      })
      
  },
  render() { 
    return (
        <WebView
          automaticallyAdjustContentInsets={true}
          style={styles.webView}
          source={{html:this.state.detailData,baseUrl:''}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
    );
  },
})

const styles = StyleSheet.create({
  webView:{
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

module.exports = NewsDetail;