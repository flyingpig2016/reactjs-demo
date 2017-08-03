import React, { Component } from 'react';
import {
    AppRegistry, //注册
    StyleSheet, //样式       
    Text, //文本组件
    View, //视图组件
    Image, //图片组件
    Dimensions, //获取屏幕信息
    ListView,
    TouchableOpacity,
    Alert
} from 'react-native';

var { width } = Dimensions.get('window');
var Wine = require('./Wine.json');
class listView extends Component {
    constructor(props){
        // 1.1设置数据源
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        });
        //1.2设置返回数据
        this.state = {
            dataSource : ds.cloneWithRows(Wine),
        }    
    }
    render() {      
        return (       
            <ListView
                dataSource={this.state.dataSource} //数据源
                renderRow = {this.renderRow}
            />   
        );
    };
    //返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(rowData,sectionID,rowID,)
        return ( 
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                Alert.alert('点击了第'+(parseInt(rowID)+1)+'行','确定选择该行？',[
                    {text:'取消',onPress:()=>console.log('Cancel Pressed'),style:'cancel'},
                    {text:'确定',onPress:()=>console.log('OKPressed')},
                ])
            }}>
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={{uri : rowData.image}} style={styles.leftImageStyle}/>
                    {/*右边的view*/}
                    <View style={styles.rightViewStyle}>
                        {/*右上text*/}
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        {/*右下text*/}
                        <Text style={styles.bottomTitleStyle}>￥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    cellViewStyle: {
        flexDirection:'row',
        padding:10,
        //下划线
        borderBottomWidth:0.5,
        borderColor: '#ccc',

    },
    rightViewStyle:{
        justifyContent:'center'
    },
    leftImageStyle:{
        width:60,
        height:60, 
        marginRight:15
    },
    topTitleStyle:{
        fontSize:15,
        width:width * 0.7,
        marginBottom:8
    },
    bottomTitleStyle:{
        color:'red',
    }
})
module.exports = listView;