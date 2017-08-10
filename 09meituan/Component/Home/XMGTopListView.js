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
  ListView
} from 'react-native';
/*------导入外部组件类-----*/
var {width,height} = Dimensions.get('window');
var TopListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr : []
        }
    },
    getInitialState(){
        //创建数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource : ds.cloneWithRows(this.props.dataArr)
        }
    },
    render() {
        return (
            <ListView 
                dataSource={this.state.dataSource} 
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },
    renderRow(rowdata){
        return (
            <TouchableOpacity  onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowdata.image}} style={{width:52,height:52}} />
                    <Text>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({ 
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
        justifyContent:'space-around',
    },
    cellStyle:{
        width:70,
        height:70,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    }
});
module.exports = TopListView;
