import React, { Component } from 'react';
import {
    AppRegistry, //注册
    StyleSheet, //样式       
    Text, //文本组件
    View, //视图组件
    Image, //图片组件
    Dimensions, //获取屏幕信息
    ListView,
    TouchableOpacity
} from 'react-native';

var { width } = Dimensions.get('window');
var shareData = require('./shareData.json');
var cols = 3;
var cellWH = 100;
var vMargin = (width - cellWH * cols) / (cols+1);
var hMargin = 25;
class nineCell extends Component {
    constructor(props){
        // 1.1设置数据源
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        //1.2设置返回数据
        this.state = {
            dataSource : ds.cloneWithRows(shareData.data),
        }    
    };
    render() {      
        return ( 
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        )
    };
    renderRow(rowData){
        console.log(rowData)
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('我是'+rowData.title)}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri:rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
};
const styles = StyleSheet.create({
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    iconStyle :{
        width:80,
        height:80
    },
    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin
    }
})
module.exports = nineCell;