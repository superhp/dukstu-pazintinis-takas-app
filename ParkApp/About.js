import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native';
import { Navigator } from "react-native-navigation";


export default class About extends React.Component {
  
  render() {
    //AIzaSyDL7GZd0Xt1RdkyF0OVAM6-GkUt17ySiT0
    return (
     
      <View style={styles.container}>
        <Text>This is infoooo</Text>
        <Button></Button>
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
