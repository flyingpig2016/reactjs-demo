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
var {width} = Dimensions.get('window');
class Home extends Component {
  static defaultProps = {
      url_api:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
      key_word:'T1348647853363'
  };
  constructor(props){
    super(props);
    this.state={
      //头部数据
      headerDataArr : [],
      //cell数据源
      dataSource : new ListView.DataSource({
        rowHasChanged:(r1,r2) => r1 !== r2
      })
    }
  //处理网络数据
   };
  render() { 
    return ( 
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
      />
    );
  };
  componentDidMount(){
    this.loadDataFromNet();
  };
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
  };
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
    console.log(this.state.headerDataArr)
  };
  // 头部
  renderHeader(){
      // 判断
      // if (this.state.headerDataArr.length == 0) return;
      // return(
      //     <ScrollImage
      //         imageDataArr = {this.state.headerDataArr}
      //     />
      // );
  };
  renderRow(rowData){
    return(
        <TouchableOpacity activeOpacity={0.5}>
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
  };

}

const styles = StyleSheet.create({
  cellViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderBottomWidth:0.5,
  },
  rightViewStyle:{
    width:width-100,
    height:90,
    paddingLeft:10,
    paddingRight:10,
  },
  imageStyle:{
    width:90,
    height:90
  },
  titleStyle:{
    fontSize:16,
    marginBottom:5,
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