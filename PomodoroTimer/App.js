import React from 'react';
import { StyleSheet, Text, Vibration, View, Component, Button } from 'react-native';
import Constants from 'expo-constants';
class Count extends React.Component {
				shouldComponentUpdate()
				{
								return !this.props.comp
				}
				render()
				{
								return (
													<Text style={{fontSize: 70}}>{this.props.mini}:{this.props.sec}</Text>
								)
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
		}
	}
  componentDidMount(){
			 this.interval = setInterval(()=> this.decrement(), 1000)
	}

  decrement = () =>
  {
    if(this.state.isOn==true && !this.state.completed)
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
      if(this.state.mini == '00' && this.state.sec == '00')
      {
        this.setState({completed : true})
        this.setState({isOn : false})
        // Vibration.vibrate()
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
    this.setState({mini  : "25", sec : "00", reset : "25", isOn : false, completed : false})
  }
  setShortBreak = () =>
  {
    this.setState({mini  : "05", sec : "00", reset : "05", isOn : false, completed : false})
  }
  setLongBreak = () =>
  {
      this.setState({mini  : "15", sec : "00", reset : "15", isOn : false, completed : false})
  }
	render() {
  return (
    <View style={styles.container}>
    <View >
      <Count mini={this.state.mini} sec = {this.state.sec} comp={this.state.completed}/>
    </View>
    <View style={styles.stybutton}>
      <Button title="Reset" onPress={this.doreset}/>
      <Button title="Play" onPress={this.doplay}/>
      <Button title="Pause" onPress={this.dopause}/>
    </View>
    <View style={styles.stybutton1}>
      <Button title="Pomodoro" onPress={this.setPomodoro}/>
      <Button title="Long Break" onPress={this.setLongBreak}/>
      <Button title="Short Break" onPress={this.setShortBreak}/>
    </View>
   </View> 
  )
}
}
const styles=  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : Constants.statusBarHeight,
    alignContent : 'center',
  },
  stybutton : {
  flex : 1,
  flexDirection : 'row',
  alignItems : 'center',
  justifyContent : 'space-around',
  alignContent : 'center',
  },
  stybutton1 : {
    flex : 1,
  flexDirection : 'row',
  alignItems : 'flex-start',
  justifyContent : 'space-around',
  },
})

