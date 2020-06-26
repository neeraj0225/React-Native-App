import React from 'react';
import { Animated,StyleSheet, Text, Easing, Vibration, View, Button, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

class ProgressBarAnimated extends React.Component{
    state = {
        percentage : new Animated.Value(0),
        firstTime : false,
    }
    componentWillReceiveProps(nextProps)
     {
         if(!this.state.firstTime) {
             this.setState({firstTime : true});
             this.animation = Animated.timing(
                 this.state.percentage,
                 {
                     toValue: 100,
                     duration: nextProps.TimeAndState.timeRemaining,
                     easing: Easing.linear,
                     useNativeDriver: true,
                 }
             );
             
                 this.animation.start()
         }
         else
         {
             if(nextProps.TimeAndState.timeRemaining > this.props.TimeAndState.timeRemaining)
             {
                 this.setState({percentage : new Animated.Value(0)}, this.startAnimation)
             }
         }
    }
    startAnimation = () => {
        this.animation = Animated.timing(
            this.state.percentage,
            {
                toValue: 100,
                duration: this.props.timeRemaining,
                easing: Easing.linear,
                useNativeDriver: true,
            },
        )
        this.animation.start()
    }
    
    render() {
        const {props} = this;
        const {width} = Dimensions.get('window');
        return (
            <Animated.View style={[styles.progress ,
                {transform:[{scaleX : this.state.percentage.interpolate({
                            inputRange : [0,100],
                            outputRange : [0, width],
                        })}]},
                ]}
            />
        );
    }
}
const styles = StyleSheet.create({
    progress : {
        backgroundColor : 'blue',
        height : 17,
        width : 2,
    },
})

ProgressBarAnimated.propTypes = {
    TimeAndState : PropTypes.shape({
        totalTime : PropTypes.number,
        timeRemaining : PropTypes.number,
        isRunning : PropTypes.bool,
    }),
}
export default ProgressBarAnimated;