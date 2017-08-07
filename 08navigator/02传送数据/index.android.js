      import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View  
} from 'react-native';  
  
import FirstPageComponent from "./FirstPageComponent";  
import {Navigator} from "react-native-deprecated-custom-components";  
class Hello extends Component {  
      
    constructor(props){  
      super(props);  
      this.state = {  
      };  
    }  
    render() {  
        return (  
           <Navigator  
              //这个指定了默认的页面，也就是启动app之后会看到界面的第一屏  
              initialRoute={{ name: 'FirstPageComponent', component: FirstPageComponent }}  
              //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，  
              //有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js  
              configureScene={(route) => {  
                return Navigator.SceneConfigs.VerticalDownSwipeJump;  
              }}  
              //route就是传递的name,component，navigator是一个Navigator的对象  
              renderScene={(route, navigator) => {  
                let Component = route.component;  
                /** 
                 *   
                   ... JSX的延展属性 
                   var props = {}; 
                   props.propA = x; 
                   props.propB = y; 
                   var component = <Component {...props}/> 
                   这样 component 这个JSX元素有了props变量的所有属性 
                   navigator作为props传递给了这个component 
                 */  
                return <Component {...route.params} navigator={navigator} />  
              }} />  
        );  
    }  
  
}  
  
const styles = StyleSheet.create({  
    counter:{  
      flex:1,  
      justifyContent:'center',  
      alignItems:'center',  
      backgroundColor:'#e8e8e8'  
    }  
});
AppRegistry.registerComponent('Hello', () => Hello);    