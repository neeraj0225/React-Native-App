import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import PlayerComponent from "../components/PlayerComponent";
class Player extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.route.params.item;
        return (
            <View style={styles.container}>
                <PlayerComponent navigation={this.props.navigation} item={item} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Player;
