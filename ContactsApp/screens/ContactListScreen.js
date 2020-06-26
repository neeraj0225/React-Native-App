import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import SectionListContacts from '../SectionListContacts';

class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddContact')}
          color="#03806b"
        />
      ),
    };
  };

  state = {
    showContacts: false,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  // handleSelectContact = contact => {
  //   this.props.navigation.push('ContactDetails', contact);
  // };
  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button style = {styles.but} title="toggle contacts" onPress={this.toggleContacts} />
        <Button style = {styles.but} title="Add Contact" onPress={this.showForm} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
            onSelectContact = {contact => {this.props.navigation.navigate('ContactDetails', {
              phone : contact.phone,
              name : contact.name,
            })}}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : Constants.statusBarHeight,
  },
  but : {
    backgroundColor: '#00aeef',
  },
});

const mapStateToProps = state => ({
  contacts: state.contacts,
})
export default connect(mapStateToProps)(ContactListScreen);