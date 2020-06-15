import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BannerComponent from "../components/BannerComponent";
import CategoryComponent from "../components/CategoryComponents";
import SongComponent from "../components/SongComponent";
class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Music App</Text>
                <ScrollView>
                    <BannerComponent navigation={this.props.navigation} />
                    <CategoryComponent navigation={this.props.navigation} />
                    <Text style={[styles.title, {marginTop: 0}]}>Songs</Text>
                    <SongComponent navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15,
    },
});

export default Home