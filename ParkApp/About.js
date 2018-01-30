import React from 'react';
import { StyleSheet, Text, View, Dimensions, ControlPanel } from 'react-native';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerMenu from './DrawerMenu';


export default class About extends React.Component {
  static navigationOptions = {
    title: 'About'
  }
  render() {
    //AIzaSyDL7GZd0Xt1RdkyF0OVAM6-GkUt17ySiT0
    return (
     
      <View style={styles.container}>
        <Text>This is infoooo</Text>
        <Button onPress={this.openControlPanel}
                title="Drawer"
                color="#841584"
                accessibilityLabel="Learn more about this blue button"
                style={styles.actionButton}>
        </Button>
        {/*<DrawerMenu
        
          >
        </DrawerMenu>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  actionButton: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 20,
    zIndex: 1
  }
});
