import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Animated, TouchableWithoutFeedback  } from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import Tabs from "./config/router";
import Player from "./screens/Player";
import CategoriesDetails from "./components/CategoriesDetails";
import Home from "./screens/Home";
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  gotoTabs(){
    this.props.navigation.navigate("Tabs");
  }
  render() {
      const zoomIn = {
          0: {
              scale: 0,
          },
          0.5: {
              scale: 0.5,
          },
          1: {
              scale: 1,
          },
      };
    return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Text style={styles.title}>Music App</Text>
            <Animatable.Image
                animation={zoomIn}
                source={require('./assets/music-logo.png')}
                style={styles.logo}
            />
          <TouchableOpacity style={styles.btn} onPress={() => {this.gotoTabs()}}>
            <Text style={styles.text} >Start Listening Music!</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
const Stack = createStackNavigator();
function Stacks() {
return(
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown :false
        }}/>
      <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown :false
          }}/>
        <Stack.Screen
            name="Player"
            component={Player}
            options={{
                headerShown :false
            }}/>
        <Stack.Screen
            name="Details"
            component={CategoriesDetails}
            options={{
                headerShown: false,
            }}/>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}/>
    </Stack.Navigator>
);
}

function MainScreen() {
  return(
      <NavigationContainer>
        <Stacks/>
      </NavigationContainer>
  );
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: '80%',
    marginBottom: 40,
    marginTop: 25,
  },
  btn: {
    width: '70%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
