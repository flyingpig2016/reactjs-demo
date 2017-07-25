/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  AppRegistry,  //注册
  StyleSheet,   //样式       
  Text,     //文本组件
  View,     //视图组件
  Image,    //图片组件
  Dimensions,  //获取屏幕信息
} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerViewStyle}>
          <Text style={{backgroundColor:'red'}}>我是第1个view</Text>
          <Text style={{backgroundColor:'green'}}>我是第2个view</Text>
          <Text style={{backgroundColor:'blue'}}>我是第3个view</Text>
          <Text style={{backgroundColor:'yellow'}}>我是第4个view</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:'row',
    height:100,
    backgroundColor: '#ccc',
  },  
  innerViewStyle : {
    flexDirection : 'row',
    backgroundColor:'green',
  },
  innerViewStyle2 : { 
    backgroundColor : 'yellow'  
  },
});

// 第四个示例程序 
//引入
// var Dimensions = require('Dimensions');
 class getScreen extends Component{
   render(){
     return(
       <View style={styles2.screen}>
          <Text>当前屏幕宽度：{Dimensions.get('window').width}</Text>
          <Text>当前屏幕宽度：{Dimensions.get('window').height}</Text>
          <Text>当前屏幕分辨率：{Dimensions.get('window').scale}</Text>
       </View>
     )
   }
 }
const styles2 = StyleSheet.create({
  screen : {
    flex : 1,  //占满屏幕
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor:'#cff'
  }
})

//图片加载方法
class imgLoad extends Component{
  render(){
    return (
      <View style={styles3.container}>
        <Text>加载本地图片</Text>
        <Image source={require('./img/1.jpg')} style={styles3.img1} />

        <Text>加载app内部图片</Text>
        <Image source={{uri:'qiu'}} style={styles3.img1} />

        <Text>加载网络图片</Text>
        <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={styles3.baidu} />
        
        <Image source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1902468542,2120439953&fm=200&gp=0.jpg'}} style={styles3.baidu2}>
          <Text>设置图片为背景</Text>
        </Image>
      </View>
    )
  }
}
const styles3 = StyleSheet.create({
  container:{
    flex:1,
  },
  img1 : {
    width:'100%',
    flex : 1,
  },
  baidu : {
    flex : 1,
  },
  baidu2 : {
    flex : 1,
    width:100,
    height:100,
    resizeMode : Image.resizeMode.stretch,
  }
})

//导入json数据
var BadgeData = require('./BadgeData.json');
var {width} = Dimensions.get('window');  //es6语法。
var cols = 3;   //列数
var boxWidth = 100;
var vMargin = (width - cols * boxWidth) / (cols+1);//间距大小
var hMargin = 25;

//图片json
class AImageDemo extends Component{
  render(){
    console.log(width);
    return ( 
      <View style={styles4.container}>
        {/*返回6个包*/}
        {this.renderAllBadge()} 
      </View>
    )
  }
  //返回所有的包
  renderAllBadge(){
    //定义数组组装所有的子组件
    var allBadge = [];
    for(var i=0; i<BadgeData.data.length; i++){
      //去出单独的数据对象
      var badge = BadgeData.data[i]; 
      allBadge.push( 
        <View key={i} style={styles4.outViewStyle}>
          <Image source={{uri:badge.icon}} style={styles4.imageStyle} />
          <Text style={styles4.mainTitleStyle}>
            {badge.title} 
          </Text>  
        </View> 
      )
    } 
    return allBadge
  }
}

const styles4 = StyleSheet.create({
  container : {
    // 确定主轴的方向
    flexDirection:'row',
    // 换行显示
    flexWrap:'wrap', 
    justifyContent :'center',
  },
  outViewStyle:{
     // 设置侧轴的对齐方式
     alignItems:'center',
     width:boxWidth,
     height:boxWidth,
     marginLeft:vMargin,
     marginTop:hMargin,
     backgroundColor:'#ccc'
  },
  imageStyle:{
     width:80,
     height:80
  },
  mainTitleStyle : {

  }
})
AppRegistry.registerComponent('Hello', () => AImageDemo);        
