import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  Navigator,  
  TouchableOpacity,  
  View  
} from 'react-native';  
  
import SecondPageComponent from "./SecondComponent";  
  
class FirstPageComponent extends Component {  
      
    constructor(props){  
        super(props);  
            this.state = {  
            id: 2,  
            user: null,  
        };  
        _this = this;  
    }  
      
    render() {  
    if(_this.state.user){  
        return(  
            <View style={styles.counter}>  
                <Text>用户信息: {JSON.stringify(_this.state.user)}</Text>  
            </View>  
        );    
        } else {  
            return (  
                <View style={styles.counter}>  
                    <TouchableOpacity onPress={()=>{_this._pressButton()}}>  
                        <Text>查询ID为{_this.state.id}的用户信息</Text>  
                    </TouchableOpacity>  
                </View>  
            );  
        }  
         
    }  
  
    _pressButton(){  
      const {navigator} = this.props;  
        if(navigator) {  
            navigator.push({   
                name: 'SecondPageComponent',  
                component: SecondPageComponent,  
                /**页面间数据的传递 与将第二个页面如何将结果返回给第一个页面的方法 
                 *  
                 * 1.通过push,传递参数 
                 *   这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数... 
                 *   id 
                 * 2.把上一个页面的实例或者回调方法，作为参数传递到当前页面来，在当前页面操作上一个页面的state 
                 */  
                params: {  
                    id: _this.state.id,  
                    getUser(user) {  
                        _this.setState({  
                            user: user  
                        })  
                    },  
                }  
            })  
        }  
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
module.exports = FirstPageComponent;