/**
 * https://github.com/facebook/react-native
 * @flow 闪屏页
 */


import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TextInput,TouchableOpacity} from 'react-native';


class ProductDetail extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.detail}>商品详情页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  detail: {
    fontSize: 24,
    textAlign: 'center',
  }
});

export default ProductDetail;