/**
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity} from 'react-native';
import ProductDetail from './ProductDetail';


class ProductList extends Component {
  openPage() {
        this.props.navigator.push({
            title: 'ProductDetail',
            component: ProductDetail
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.openPage.bind(this)}>
                    <Text style={styles.textStyle}>点我跳转第二个页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
    },
    textStyle: {
        fontSize: 20,
        color:'#55ACEE',
        marginBottom: 8,
        textAlign: 'left'
    }
 
});

export default ProductList;