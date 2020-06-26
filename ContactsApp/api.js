import store from './reduxFiles/store'
import { addContact } from "./reduxFiles/actions";

const processData = contact => ({
	name : `${contact.name.first} ${contact.name.last}`,
	phone : contact.phone,
});

export const fetchUsers = async () => {
	const response = await fetch('https://randomuser.me/api/?results=5');
	const {results} = await response.json();
	return results.map(processData);
};

export const login = async (username, password) => {
	const response = await fetch('http://192.168.43.154:8000', {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({username, password}),
	});

	if (response.ok) {
		const json = await response.json();
		return json.token;
	}

	const errMessage = await response.text();
	throw new Error(errMessage);
};