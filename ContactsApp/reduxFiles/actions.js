//Action Types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const CONTACT_FETCH_PENDING = 'CONTACT_FETCH_PENDING'
export const CONTACT_FETCH_SUCCESS = 'CONTACT_FETCH_SUCCESS'
export const CONTACT_FETCH_FAILED = 'CONTACT_FETCH_FAILED'
import { login } from "../api";
import { fetchUsers } from "../api";
//Action Creators

export const updateUser = update => ({
        type : UPDATE_USER,
        payload : update,
    })
export const addContact = newContact => ({
        type : UPDATE_CONTACT,
        payload : newContact,
    })
// async action creator
export const logInUser = (username, password) =>async dispatch => {
    dispatch({type: LOG_IN_SENT})
    try {
        const token = await login(username, password);
        dispatch({type: LOG_IN_SUCCESS, payload: token})
    }
    catch(err)
    {
        dispatch({type: LOG_IN_REJECTED, payload : err.message})
    }
}

export const fetchContacts = () => async dispatch => {
    dispatch({type: CONTACT_FETCH_PENDING})
    try {
        const contacts = await fetchUsers();
        dispatch({type: CONTACT_FETCH_SUCCESS, payload : contacts})
    }
    catch(err)
    {
        dispatch({type: CONTACT_FETCH_FAILED, payload : err.message})
    }
}