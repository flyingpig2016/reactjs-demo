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
  ScrollView,
  WebView
} from 'react-native';
/*------导入外部组件类-----*/
var {width,height} = Dimensions.get('window');
var ShopCenterDetail = React.createClass({
    getInitialState(){ 
      return{
          detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
      }
    },
    render() {
        //alert(this.state.detailUrl)
        return ( 
            <View style={styles.container} > 
                {/*导航条*/}
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                />            
        </View>
        );
    },
    popHomeView(){
        this.props.navigator.pop();
    },
    renderNavBar(){
        return (
        <View style={styles.navOutViewStyle}>
            <TouchableOpacity onPress={()=>{this.popHomeView()}} style={styles.moreStyle}>
                <Image source={{uri:'navigationbar_arrow_up'}} style={{width:8,height:13}}/>
                <Text style={{color:'#fff',marginLeft:5,}}>上一页</Text>
            </TouchableOpacity>
            <Text style={{color:'#fff',fontSize:16}}>购物中心</Text>
        </View>

        )  
    }

})

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    navOutViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS=='ios' ? 64 : 54,
        backgroundColor:'rgba(255,96,0,1.0)',
    },
    moreStyle:{
        height:'100%',
        position:'absolute',
        left:10,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    },
    navImageStyle:{
        width:Platform.OS=='ios' ? 28 : 25,
        height:Platform.OS=='ios' ? 28 : 25,
    }
});
module.exports = ShopCenterDetail;
