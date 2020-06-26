import React from 'react';
import AddContactForm from '../AddContactForm'
import { addContact } from "../reduxFiles/actions";
import {connect} from 'react-redux'

class AddContactScreen extends React.Component{
	static navigationOptions = {
		headerTitle : 'Add Contact',
	}
	handleSubmit = formState =>  {
		this.props.addContact({name: formState.name, phone: formState.phone})
		this.props.navigation.navigate('ContactList');
	};
	
render()
{
	return <AddContactForm onSubmit={this.handleSubmit}/>
}
}
export default connect(null, {addContact: addContact})(AddContactScreen)