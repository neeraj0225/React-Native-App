import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import {connect} from "react-redux";

class ContactDetailsScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		return {
		headerTitle : navigation.getParam('name'),
		
	};
};
	render() {
		return (
			<View>
				<Text>{this.props.navigation.getParam('phone')}</Text>
				<Button title="Go to random contact" onPress={this.goToRandomContact} />
			</View>
		);
	}
	goToRandomContact = () => {
	const contacts = this.props.contacts;
	const phone = this.props.navigation.getParam('phone');
	let randomcontact;
	while(!randomcontact)
	{
		index = Math.floor(Math.random() * contacts.length);
		if(contacts[index].phone !== phone)
		{
			randomcontact = contacts[index];
		}
	}
	this.props.navigation.push('ContactDetails', {
		...randomcontact,
	});
};
}
const mapStateToProps = state => ({
	contacts: state.contacts,
})
export default connect(mapStateToProps)(ContactDetailsScreen);