import React from 'react';
import { StyleSheet, Text, View, Dimensions, ControlPanel } from 'react-native';
import { Button } from 'react-native';
import Drawer from 'react-native-drawer';


export default class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <View>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    open={true}
                    type="overlay"
                    content={<ControlPanel />}
                    tapToClose={true}
                    openDrawerOffset={0.2} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={styles}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(2-ratio)/2 }
                    })}
                    >
                        <Text>Aloha</Text>
                        <Button onPress={this.props.closeControlPanel}
                                title="Close"
                                color="#841584"
                                accessibilityLabel="Learn more about this blue button"
                                style={styles.actionButton}>
                        </Button>
                </Drawer>
            </View>
        );
    }
}

const styles = {
    drawer: { 
        shadowColor: '#000000', 
        shadowOpacity: 0.8, 
        shadowRadius: 3
    },
    main: {
        paddingLeft: 3
    },
    actionButton: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: 20,
        zIndex: 1
      }
  }