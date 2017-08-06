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
  View 
} from 'react-native';
var Main = require('./Component/XMGMain'); 
export default class newsApp extends Component {
  render() {
    return (
      <Main /> 
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('newsApp', () => newsApp);
