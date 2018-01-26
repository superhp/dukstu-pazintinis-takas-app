import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class About extends React.Component {
  static navigationOptions = {
    title: 'About'
  }
  render() {
    //AIzaSyDL7GZd0Xt1RdkyF0OVAM6-GkUt17ySiT0
    return (
     
      <View style={styles.container}>
        <Text>This is infoooo</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  }
});
