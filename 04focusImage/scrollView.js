import React, { Component } from 'react';
import { 
  AppRegistry,  //注册
  StyleSheet,   //样式       
  Text,     //文本组件
  View,     //视图组件
  Image,    //图片组件
  Dimensions,  //获取屏幕信息
  ScrollView
} from 'react-native';
var {width} = Dimensions.get('window');
//es5写法
var scrollView = React.createClass({
  render() {
    return (   
      <ScrollView
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true} 
      >
        {this.renderChildView()}
      </ScrollView>
    )
  }, 
  renderChildView(){
      var allChild = [];
      var colors = ['red','green','blue','yellow','purple'];
      //遍历
      for(var i=0; i<5; i++){
          allChild.push(
              <View key={i} style={{backgroundColor:colors[i],width:width,height:200}}>
                <Text>{i}</Text>
              </View>
          );
      }
    return allChild;
  }
});

//es6写法
// class touchable extends Component {

// }

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5fcff'
  },
  innerViewStyle:{
    backgroundColor:'red'
  }
})
module.exports = scrollView;