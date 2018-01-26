import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Map from './Map.js';
import About from './About.js';

export default ParkApp = StackNavigator({
  Map : {screen: Map},
  About : {screen : About}
});