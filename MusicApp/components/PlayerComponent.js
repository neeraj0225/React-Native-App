import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';
import {Audio} from "expo-av";
import GestureRecognizer from "react-native-swipe-gestures";
const {width, height} = Dimensions.get('screen');

class PlayerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0.0,
            maxValue: 0.0,
            isPlaying : false,
            playbackInstance: null,
            isBuffering: false,
            actFlag: 0,
        };
    }
    
    handlePlayPause = async () => {
        this.state.isPlaying ? await this.state.playbackInstance.pauseAsync() : await this.state.playbackInstance.playAsync()
        this.setState({
            isPlaying: !this.state.isPlaying,
        })
    }
    
    
    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        })
    }
     loadAudio= async() => {
        try {
            let playbackInstance = new Audio.Sound();
            const status = {
                shouldPlay: this.state.isPlaying,
            }
            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(this.props.item.uri, status, false)
            this.setState({playbackInstance})
        } catch (e) {
            console.log(e)
        }
    }
    
    componentDidMount= async() => {
        try {
            this.loadAudio().then(console.log(''));
        }catch (e) {
            console.log(e)
        }
    }
    
    async onSwipeRight(){
        await this.state.playbackInstance.pauseAsync();
        await this.state.playbackInstance.unloadAsync();
        this.setState({
            isPlaying: !this.state.isPlaying,
            playbackInstance: null,
            isBuffering: false
        })
        this.props.navigation.goBack();
    }
    
    render() {
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80,
        };
        return (
            <GestureRecognizer style={styles.container} onSwipeRight={() => {this.onSwipeRight().then(console.log(''))}} config={config}>
                <View style={styles.container}>
                    <View>
                        <Surface style={styles.surface}>
                            <Image source={this.props.item.img} style={styles.img} />
                        </Surface>
                        <View style={styles.dataContainer}>
                            <Text style={styles.title}>{this.props.item.title}</Text>
                            <Text style={styles.subTitle}>{this.props.item.subTitle}</Text>
                            <Text style={styles.subTitle}>{this.props.item.duration}</Text>
                            <Text style={styles.direction}>Swipe from Left to Right to Go Back</Text>
                        </View>
                        
                    </View>
                <View style={styles.main}>
                    <Slider
                        value={this.state.value}
                        minimumValue={0.0}
                        maximumValue={this.state.maxValue}
                        onValueChange={value => this.setState({value})}
                        thumbStyle={{backgroundColor: '#ff5b77', height: 12, width: 12}}
                        thumbTintColor="red"
                        maximumTrackTintColor="#e5e5e5"
                        minimumTrackTintColor="#ff5b77"
                        trackStyle={{backgroundColor: 'red', height: 1}}
                    />
                    <View style={styles.actions}>
                        <Icon name="shuffle-variant" size={35} color="#000" />
                        <TouchableOpacity onPress={() => alert('')}>
                        <Icon name="skip-backward" size={35} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePlayPause}>
                            {this.state.isPlaying ? (
                        <Icon name="pause" size={35} color="#000" /> ) : (<Icon name="play" size={35} color="#000" />)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('')}>
                        <Icon name="skip-forward" size={35} color="#000" />
                        </TouchableOpacity>
                        <Icon name="sync" size={35} color="#000" />
                    </View>
                </View>
                </View>
            </GestureRecognizer>
        );
    }
}

export default PlayerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    surface: {
        height: 200,
        width: 200,
        borderRadius: 10,
        elevation: 15,
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: 20,
    },
    img: {
        height: 250,
        width: 250,
    },
    dataContainer: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
        fontSize : 20.
    },
    actions: {
        width: '100%',
        height: 60,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    main: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#333333',
        margin: 10,
    },
    direction : {
        fontSize : 16,
        marginTop: 20,
        paddingLeft : 15,
    }
});