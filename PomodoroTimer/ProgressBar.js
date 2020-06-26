import React from 'react';
import { StyleSheet, Text, Vibration, View, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component{
    state = {
        percentage : 0,
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.TimeAndState)
        {
            this.state.percentage = 1 - (nextProps.TimeAndState.timeRemaining / nextProps.TimeAndState.totalTime);
        }
    }
    
    render() {
        const {width} = Dimensions.get('window');
        return (
            <View style={[styles.progress, {width : this.state.percentage * width}]}/>
        );
    }
}
const styles = StyleSheet.create({
    progress : {
      backgroundColor : 'blue',
      height : 15,
      width : 100,
    },
})

ProgressBar.propTypes = {
    TimeAndState : PropTypes.shape({
        totalTime : PropTypes.number,
        timeRemaining : PropTypes.number,
        isRunning : PropTypes.bool,
    }),
}
export default ProgressBar;