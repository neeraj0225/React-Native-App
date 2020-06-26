import React from "react";
import { Button, View, StyleSheet, Text , TextInput} from "react-native";
import {login} from '../api'
import { connect } from "react-redux";
import { logInUser } from '../reduxFiles/actions';
import PropTypes from 'prop-types';
class LoginScreen extends React.Component {
  static  propTypes = {
    err: PropTypes.string,
    token : PropTypes.string,
    logInUser  : PropTypes.func,
  }
  state = {
    username : '',
    password : '',
  }
  componentWillReceiveProps(nextProps) {
      if(nextProps.token)
      {
        this.props.navigation.navigate('Main');
      }
  }
  
  _login = async () => {
      this.props.logInUser(this.state.username, this.state.password);
  }

  handleUsername = username => {
    this.setState({username})
  }

  handlePassword = password => {
    this.setState({password})
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.textsty} > Login </Text>
        <TextInput 
          style = {styles.input}
          placeholder = "Username"
          value={this.state.username}
          onChangeText = {this.handleUsername}
          autoCapitalize="none"
          />
        <TextInput 
          style = {styles.input}
          placeholder = "Password"
          value={this.state.password}
          onChangeText = {this.handlePassword}
          secureTextEntry
          />
          <View style = {styles.button}>
        <Button title="Press to Log In" onPress={this._login} />
        </View>
        <Text style={styles.error}>{this.props.err}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  button : {
    marginTop : 20,
    color : "black",
  },
  textsty : {
    width: 300,
    fontSize: 30,
    marginTop : 50,
    paddingHorizontal: 10,
  },
  error : {
    textAlign : 'center',
    color : 'red',
    marginTop : 200,
  }
});
const MapStateToProps = state => ({
  err : state.user.LogErr,
  token : state.user.token,
})
export default connect(MapStateToProps, {logInUser})(LoginScreen);