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
var Map = React.createClass({
    getDefaultProps(){
        return{
            detailUrl: '',
        }
    },
    render() {
        alert(this.props.detailUrl)
        return ( 
            <View style={styles.container} > 
                {/*导航条*/}
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.props.detailUrl}}
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
            <TouchableOpacity onPress={()=>{this.popHomeView()}} style={styles.LeftStyle}>
                <Image source={{uri:'icon_shop_local'}} style={{width:20,height:20}}/>
            </TouchableOpacity>
            <Text style={{color:'#fff',fontSize:16}}>商家</Text>
            <TouchableOpacity onPress={()=>{this.popHomeView()}} style={styles.RightStyle}>
                <Image source={{uri:'icon_shop_search'}} style={{width:20,height:20}}/>
            </TouchableOpacity>
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
    LeftStyle:{
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
    },
    RightStyle:{
        height:'100%',
        position:'absolute',
        right:10,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    }
});
module.exports = Map;
