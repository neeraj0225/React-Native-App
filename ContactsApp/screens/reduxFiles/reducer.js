import {combineReducers} from 'redux';  
import {UPDATE_USER, UPDATE_CONTACT, LOG_IN_SUCCESS, LOG_IN_REJECTED, CONTACT_FETCH_FAILED, CONTACT_FETCH_PENDING, CONTACT_FETCH_SUCCESS} from './actions';

const merge = (prev, update) => Object.assign({},prev, update)
const contactreducer = (state = [], action) => {
    if(action.type === UPDATE_CONTACT)
    {
        return [...state, action.payload]
    }
    return state
}
const userreducer = (state = {}, action) => {
    switch(action.type) 
    {
        case UPDATE_USER : return merge(state, action.payload)

        case UPDATE_CONTACT : return merge(state, {prevContact : action.payload})
        
        case LOG_IN_SUCCESS : return merge(state, {token : action.payload})
        
        case LOG_IN_REJECTED : return merge(state, {LogErr : action.payload})
        
        default : return state
    }
}

const contactFetch = (state= [], action) => {
    switch(action.type)
    {
        case CONTACT_FETCH_SUCCESS : return merge(state, {contact : action.payload})
        
        case CONTACT_FETCH_FAILED : return merge(state,{FetchErr : action.payload});
        
        default : return state
    }
}

const reducer = combineReducers({
    user : userreducer,
    contacts : contactreducer,
    contactF : contactFetch,
})
export default reducer
