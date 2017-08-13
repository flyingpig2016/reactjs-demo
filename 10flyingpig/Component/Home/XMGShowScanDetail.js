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
  ScrollView
} from 'react-native';
import { QRScannerView } from 'ac-qrcode';

export default class DefaultScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'',
            type:''
        }
    }
    render() {
        return (
            <QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                renderTopBarView={() => this._renderTitleBar()}
                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar(){ 
        return(
            <TouchableOpacity style={styles.topBarStyle} onPress={()=>{this._popToHome()}}>
                <Image source={{uri:"navigationbar_arrow_up"}} style={styles.topImgStyle} />
                <Text style={{color:'#fff',fontSize:16}}>亲，请您扫一扫</Text>
            </TouchableOpacity>

        );
    }
    _popToHome(){
        this.props.navigator.pop();
    }
    _renderMenu() {
        return (
            <View>
                <Text
                    style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
                >data: {this.state.data}, type: {this.state.type}</Text>
            </View>

        )
    }

    barcodeReceived(e) {
        this.setState({
            data:e.data,
            type:e.type
        })
        
    }
}

const styles = StyleSheet.create({
    topBarStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:Platform.OS=='ios' ? 64 : 54,
    },
    topImgStyle:{
        width:13,
        height:18,
        position:'absolute',
        left:10,
    }
})
module.exports = DefaultScreen;