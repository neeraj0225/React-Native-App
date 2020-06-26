import { createStore, applyMiddleware } from 'redux';
import reducer  from './reducer'
import thunk from "redux-thunk";
import { addContact } from './actions';
import { fetchUsers } from "../api";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const Persistor = persistStore(store)
// const thunk = store => next => action => {
//     if(action.type === 'function')
//     {
//         action(store.dispatch());
//     }else{
//         next(action);
//     }
// }
store.dispatch(addContact({name : 'Rajesh Gajare', phone : '9833371817'}))
store.dispatch(addContact({name : 'Neeraj Gajare', phone : '9967296294'}))
store.dispatch(addContact({name : 'Kanchan Gajare', phone : '9833394162'}))
store.dispatch(addContact({name : 'Pravin Gajare', phone : '9876543210'}))
store.dispatch(addContact({name : 'Pranav Gajare', phone : '1234567890'}))
store.dispatch(addContact({name : 'Purnima Gajare', phone : '3445679997'}))

