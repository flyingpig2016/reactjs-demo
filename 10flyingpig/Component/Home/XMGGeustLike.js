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
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';
import CommonCell from './XMGBottomCommonCell';
import youLikeData from '../../LocalData/HomeGeustYouLike.json';
var GeustLike = React.createClass({
    getDefaultProps(){
       return{
           api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
       }
    },
    getInitialState(){
        //初始化数据
        return {
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <CommonCell 
                    leftIcon = 'cnxh'
                    leftTitle = '猜你喜欢'
                />
                {/*猜你喜欢列表*/}
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },
    dealWidthImgUrl(url){  
        return url.replace('w.h','240.180');
    },
    renderRow(rowData){
        return(
            <TouchableOpacity onPress={()=>{alert('like')}}>  
                <View style={styles.listViewStyle}>
                    {/*左边*/}
                    <Image source={{uri:this.dealWidthImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle} />
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text style={{color:'black'}}>{rowData.title}</Text>
                            <Text style={{marginRight:5}}>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>  
                            <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                            <Text style={{marginRight:5}}>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    },
    componentDidMount(){
        this.loadDataFromNet();
    },
    loadDataFromNet(){
        fetch(this.props.api_url)
            .then((response) => response.json())
            .then((responseData)=>{ 
                // alert('success')
                // console.log(responseData)
                // 更新数据源
                this.setState({ 
                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                })
            })
            .catch((error)=>{
                // alert('error')
                console.log(youLikeData);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(youLikeData.data)
                })
            })
    }
})

const styles = StyleSheet.create({
    imageViewStyle:{   
        width:120,
        height:90
    },
    listViewStyle:{
        backgroundColor:'#fff',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        flexDirection:'row',
    },
    rightViewStyle:{
        marginLeft:8,
        width:220,
        justifyContent:'center',
    },
    rightTopViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between',
    },
    rightBottomViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
});
module.exports = GeustLike;

