import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';

class Core extends Component {
  
  constructor(props) {
    super(props);
    this.state = { enabled: false };

    this._onPressEnable = this._onPressEnable.bind(this);
  }

  _onPressEnable() {
    this.setState(previousState => {
      return { enabled: !previousState.enabled };
    });
  }

  render() {
    return (
      <View style={ styles.box }>
        <Text style={ styles.title }>Outta</Text>
        <Text style={ styles.subTitle }>Tracking Easily</Text>
        <Button
          onPress={ this._onPressEnable }
          accessibilityLabel="Enable or Disable Tracking feature"
          style={ styles.primary }
        >
        { !this.state.enabled ? "Enable" : "Disable" }
        </Button>
      </View>      
    );
  }

}
export default Core;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#7952b3',
    fontSize: 45,
  },
  subTitle: {
    color: '#212529',
    fontSize: 24,
  },
  primary: {
    margin: 10,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#7952b3',
    borderColor: '#7952b3',
    color: '#fff',
  },
});