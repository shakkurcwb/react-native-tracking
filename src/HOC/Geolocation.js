import React, { Component } from 'react';
import { View } from 'react-native';

class Geolocation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        error: this.state.error
      });
    });
    return (
      <View>
        {childrenWithExtraProp}
      </View>      
    );
  }

}

export default Geolocation;