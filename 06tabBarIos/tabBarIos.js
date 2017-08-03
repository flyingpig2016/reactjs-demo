import React, { Component } from 'react';
import {
    AppRegistry, //注册
    StyleSheet, //样式       
    Text, //文本组件
    View, //视图组件
    Image, //图片组件
    Dimensions, //获取屏幕信息
    TabBarIOS
} from 'react-native';

var { width } = Dimensions.get('window');

class tabBarIos extends Component {
    constructor(props){
        super(props);
        this.state = {   
            //默认被选中的tabBarItem
            selectedTabBarItem : 'home'
        }    
    };
    render() {      
        return ( 
            <View style={styles.container}>
                {/*头部*/}
                <View style={styles.headerViewStyle}>
                    <Text  style={{color:'white'}}>Tab选项卡的切换</Text>
                </View>
                <View>
                    <TabBarIOS 
                        barTintColor='black'
                        tingtColor='green'
                        style={{flex:1}}
                    >
                        {/*第一块*/}
                        <TabBarIOS.Item
                            systemIcon="contacts"
                            badge="3"
                            selected={this.state.selectedTabBarItem=='home'}
                            onPress={()=>{this.setState({selectedTabBarItem:'home'})}}
                        >
                            <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                                <Text>首页</Text>
                            </View>
                        </TabBarIOS.Item>
                        {/*第二块*/}
                        <TabBarIOS.Item
                            systemIcon="bookmarks"
                            selected={this.state.selectedTabBarItem=='second'}
                            onPress={()=>{this.setState({selectedTabBarItem:'second'})}}
                        >
                            <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                                <Text>第二页</Text>
                            </View>
                        </TabBarIOS.Item>
                        {/*第三块*/}
                        <TabBarIOS.Item
                            systemIcon="downloads"
                            badge="3"
                            selected={this.state.selectedTabBarItem=='three'}
                            onPress={()=>{this.setState({selectedTabBarItem:'three'})}}
                        >
                            <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                                <Text>第三页</Text>
                            </View>
                        </TabBarIOS.Item>
                        {/*第四块*/}
                        <TabBarIOS.Item
                            systemIcon="search"
                            badge="3"
                            selected={this.state.selectedTabBarItem=='four'}
                            onPress={()=>{this.setState({selectedTabBarItem:'four'})}}
                        >
                            <View style={[styles.commonViewStyle,{backgroundColor:'purple'}]}>
                                <Text>第四页</Text>
                            </View> 
                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
            </View> 
        )
    }; 

};
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerViewStyle:{
        height:64,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    commonViewStyle:{
        flex:1,
        justifyContent:'center',
    }
})
module.exports = tabBarIos;
