import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import Constants from 'expo-constants'
import PropTypes from 'prop-types'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent : 'center',
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
  butt : {
    marginTop :20,
  }
})

export default class AddContactForm extends React.Component
{
    static propTypes = {
        addContact : PropTypes.func,
    }
    state =  {
        name : '',
        phone : '',
        isValidForm : false,
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone)
            this.validateForm()
    }
    
   /* generalHandler = key => val => {
        this.setState({[key] : val})
    }*/
    
    handleNameChange = name => {
    this.setState({name})
  }


  validateForm = () => {
      const names = this.state.name.split(' ')
      if (+this.state.phone >=0 && this.state.phone.length === 10 && names.length >=2 && names[0] && names[1])
        {
             this.setState({isValidForm : true})
        }
        else {
             this.setState({isValidForm : false})
        }
  }

  handlePhoneChange = phone => {
    if (+phone >=0 && phone.length <= 10)
      {
    this.setState({phone})
      }
  }

  handleSubmit = () => 
    {
       this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour = "padding"  style = {styles.container}>
                <TextInput style = {styles.input} onChangeText = {this.handleNameChange} value = {this.state.name} />
                <TextInput style = {styles.input} onChangeText = {this.handlePhoneChange} keyboardType = "numeric" value = {this.state.phone} />
               <View style = {styles.butt}>
                <Button title="Add Contact" onPress={this.handleSubmit} disabled={!this.state.isValidForm}/>
                </View>
            </KeyboardAvoidingView>
        ) }
}
