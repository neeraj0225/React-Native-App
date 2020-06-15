import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CategoryComponent from "../components/CategoryComponents";
import SongComponent from "../components/SongComponent";
import Icon from 'react-native-vector-icons/Ionicons';

class Discover extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Discover</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Search songs here..."/>
                    <TouchableOpacity style={styles.searchBtn} >
                        <Icon name="ios-search" size={25} color="#000" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Text style={[styles.title, {marginTop: 0}]}>Recently Searched</Text>
                    <SongComponent navigation={this.props.navigation} />
                    <CategoryComponent navigation={this.props.navigation} />
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
    input : {
        height : 45,
        width : '100%',
        padding : 10,
        borderRadius : 20,
        color: "#000",
        borderWidth : 0.7,
        borderColor : "gray",
        marginRight: 10,
        fontSize: 17,
    },
    inputContainer : {
        paddingLeft : 10,
        flexDirection : 'row',
        paddingRight: 10,
        height : 50,
        marginBottom : 10,
    },
    searchBtn : {
        height: 45,
        right : 30,
        position: 'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        
    }
});

export default Discover;