import React from 'react';
import {Button, StyleSheet, Text, Vibration, View} from 'react-native';
import Constants from 'expo-constants';
import ProgressBar from "./ProgressBarAnimated";

class Count extends React.Component {
    shouldComponentUpdate()
    {
        return !this.props.comp
    }
    render()
    {
        return (
            <Text style={{fontSize: 70}}>{this.props.mini}:{this.props.sec}</Text>
        );
    }
}
export default class App extends React.Component{
	constructor(props)
	{
		super(props)
		this.state = {
			mini : '00',
			sec : '00',
			reset : '00',
			isOn : false,
			completed : false,
            longBreak : false,
            shortBreak : false,
            active : false,
		}
	}
  componentDidMount(){
	  if(!this.state.longBreak && !this.state.shortBreak && !this.state.active)
      {
        this.setPomodoro();
      }
	  this.interval = setInterval(()=> this.decrement(), 1000)
	}

  decrement = () =>
  {
    if((this.state.isOn) && !this.state.completed)
    {
      if(parseInt(this.state.sec) > 0)
      {
        this.setState(prevState => ({sec : String(parseInt(prevState.sec)-1)}))
        if(parseInt(this.state.sec) < 10)
        {
          this.setState({sec : "0" + String(this.state.sec)})
        }
      }
      else
      {
        this.setState(prevState => ({mini : String(parseInt(prevState.mini)-1), sec : "59"}))
        if(parseInt(this.state.mini) < 10)
        {
          this.setState({mini : "0" + String(this.state.mini)})
        }
      }
      if(this.state.mini === '00' && this.state.sec === '00')
      {
        this.setState({completed : true})
        this.setState({isOn : false})
        Vibration.vibrate()
      }
    }
  }

  doreset = () => 
  {
    this.setState(prevState => ({mini : prevState.reset , sec : '00'}))
    this.setState({completed : false})
    this.setState({isOn : false})
  }

  doplay = () =>
  {
    this.setState({isOn : true})
  }

  dopause = () =>
  {
    this.setState({isOn : false})
  }
  setPomodoro = () =>
  {
    this.setState({mini  : "25", sec : "00", reset : "25", isOn : false, completed : false, active : true, longBreak : false, shortBreak : false})
  }
  setShortBreak = () =>
  {
    this.setState({mini  : "01", sec : "00", reset : "01", isOn : false, completed : false,active : false, longBreak : false, shortBreak : true})
  }
  setLongBreak = () =>
  {
      this.setState({mini  : "15", sec : "00", reset : "15", isOn : false, completed : false,active : false, longBreak : true, shortBreak : false})
  }
  
  helper = () => {
	  const {longBreak, shortBreak, active, mini, sec, isOn} = this.state;
	  if(longBreak)
      {
        return {
          totalTime: 15 * 60 * 1000,
          timeRemaining: (mini * 60 * 1000) + (sec * 1000),
          isRunning : isOn,
        };
      }
	  else if(shortBreak){
        return {
          totalTime: 60 * 1000,
          timeRemaining: (mini * 60 * 1000) + (sec * 1000),
          isRunning : isOn,
        };
      }
      else if(active){
        return {
          totalTime: 25 * 60 * 1000,
          timeRemaining: (mini * 60 * 1000) + (sec * 1000),
          isRunning : isOn,
        };
      }
  }
	render() {
  return (
    <View style={styles.container}>
    <View style={{alignItems : 'center'}}>
      <Count mini={this.state.mini} sec = {this.state.sec} comp={this.state.completed}/>
    </View>
    <ProgressBar TimeAndState={this.helper()} />
    <View style={styles.stybutton}>
      <Button style={styles.but} title="Reset" onPress={this.doreset}/>
      <Button style={styles.but} title="Play" onPress={this.doplay}/>
      <Button style={styles.but} title="Pause" onPress={this.dopause}/>
    </View>
    <View style={styles.stybutton1}>
      <Button style={styles.but} title="Pomodoro" onPress={this.setPomodoro}/>
      <Button style={styles.but} title="Long Break" onPress={this.setLongBreak}/>
      <Button style={styles.but} title="Short Break" onPress={this.setShortBreak}/>
    </View>
   </View> 
  )
}
}
const styles=  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Constants.statusBarHeight,
  },
  stybutton : {
  flexDirection : 'row',
    justifyContent: 'space-around',
  marginBottom : 20,
    marginTop: 50,
  },
  stybutton1 : {
  flexDirection : 'row',
    justifyContent: 'space-around',
  marginTop : 20,
  },
  but : {
    width : 40,
    height : 50,
  },
})

