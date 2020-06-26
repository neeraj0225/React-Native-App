import React from 'react';
import { store } from "./reduxFiles/store";
import { Provider } from 'react-redux';
import App from './App'
import { registerRootComponent } from 'expo';
class index extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <App>
                </App>
            </Provider>
    );
    }
}
registerRootComponent(index);