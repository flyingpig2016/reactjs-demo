import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  Navigator,  
  TouchableOpacity,  
  View  
} from 'react-native';  
  
import FirstPageComponent from './FirstPageComponent';  
  
const USER_MODELS = {  
    1: { name: 'mot', age: 23 },  
    2: { name: '晴明大大', age: 25 }  
};  
  
class SecondComponent extends Component {  
      
    constructor(props){  
      super(props);  
      this.state = {  
          id: null  
      };  
     _this = this;  
    }  
  
    _pressButton() {  
        const {navigator} = _this.props;  
        if (_this.props.getUser) {  
            let user = USER_MODELS[_this.props.id];  
            _this.props.getUser(user);  
        }  
        if (navigator) {  
            //把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent  
            navigator.pop();  
        }  
    }  
  
    componentDidMount() {  

      this.setState({id:_this.props.id});  
    }  
  
    render() {  
        console.log(_this.props.id)
        return (  
            <View style={styles.counter}>  
                <Text>获得的参数:{_this.state.id}</Text>  
                <TouchableOpacity onPress={()=>{_this._pressButton()}}>  
                    <Text>点我跳回去</Text>  
                </TouchableOpacity>  
            </View>  
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
module.exports = SecondComponent;