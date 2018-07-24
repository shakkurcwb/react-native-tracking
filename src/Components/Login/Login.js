import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'demo',
      password: '',
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  _onPressLogin = (email, password) => {
    
  }

  render() {
    return (
      <View>
        <TextInput
          textContentType="username"
          style={ styles.input }
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          maxLength={40}
          onChangeText={ this.handleEmail }
          value={ this.state.email }
        />
        <TextInput
          textContentType="password"
          style={ styles.input }
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          maxLength={12}
          onChangeText={ this.handlePassword }
          secureTextEntry={ true }
          value={ this.state.password }
        />
        <Button
          onPress={ this._onPressLogin }
          accessibilityLabel="Sign In App"
          style={ styles.primary }
        >Sign In</Button>
      </View>
    );
  }

}
export default Login;


const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    textAlign: 'center',
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