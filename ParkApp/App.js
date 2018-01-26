import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native';
import MapView from 'react-native-maps';


export default class App extends React.Component {
  render() {
    //AIzaSyDL7GZd0Xt1RdkyF0OVAM6-GkUt17ySiT0
    return (
     
      <View style={styles.container}>
        <MapView
          style={styles.map}

          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Button
          onPress={() => alert("OK")}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this blue button"
          style={styles.actionButton}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100,
    zIndex: -1
  },
  actionButton: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 20,
    zIndex: 1
  }
});
