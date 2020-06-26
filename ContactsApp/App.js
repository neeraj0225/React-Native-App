import React from 'react';
import { Button, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'
import Ionicons from "react-native-vector-icons/Ionicons";
import { store, Persistor } from "./reduxFiles/store";
import { Provider } from 'react-redux';
import { fetchUsers } from './api';
import { fetchContacts } from './reduxFiles/actions';
import reducer from './reduxFiles/reducer'
import { PersistGate } from 'redux-persist/integration/react'
import { connect } from "react-redux";
import contacts from "./contacts";
import PropTypes from 'prop-types';
const ContactsTab = createStackNavigator({
  AddContact : AddContactScreen,
  ContactList : ContactListScreen,
  ContactDetails : ContactDetailsScreen,
},
{
  initialRouteName : 'ContactList',
  navigationOptions : {
    headerTintColor : '#a41034',
  }
}
)

ContactsTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name = "md-contacts"
      size={25}
      color={tintColor}
    />
  )
};

const MainNavigator = createBottomTabNavigator(
{
  Contacts : ContactsTab,
  Settings : SettingsScreen,
},
{
  tabBarOptions : {
    activeTintColor : '#a41034',
  }
}
)

const AppNavigator = createSwitchNavigator({
  Main : MainNavigator,
  Login : LoginScreen,
},
{
  initialRouteName : 'Login',
}
)

class App extends React.Component {
  static  propTypes = {
    FetchErr: PropTypes.string,
    contacts : PropTypes.array,
    fetchContacts  : PropTypes.func,
  }
  state = {
    showContacts: false,
    contacts : null,
  }
  componentDidMount() {
    this.getUsers().then(console.log(""));
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.contacts) {
      console.log("Contacts Received")
      this.setState({contacts: this.props.contacts})
    }
    console.log("Contacts Not Received")
    console.log(this.state.contacts)
  }
  
  getUsers = async () => {
    this.props.fetchContacts();
  }
  addContact = newContact => {
        this.setState(prevState => ({showForm : false, contacts : [...prevState.contacts, newContact]}))
  }
  
  render() {
      return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={Persistor}>
                  <AppNavigator  />
                </PersistGate>
            </Provider>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Constants.statusBarHeight,
  },
});

const mapStateToProps = state => ({
  contacts: state.contactF.contact,
  err : state.contactF.FetchErr,
})
export default connect(mapStateToProps, {fetchContacts})(App);