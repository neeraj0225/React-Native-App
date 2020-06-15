import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import {Surface} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width , height} = Dimensions.get('window');
class CategoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    goToDetails = item => {
        this.props.navigation.navigate('Details', {item : item});
    };
    render() {
        let categories = [
            {
                name : "Romantic",
                img : require("../assets/c1.jpg"),
            },
            {
                name : "Metallic",
                img : require("../assets/c2.jpg"),
            },
            {
                name : "Rock",
                img : require("../assets/c3.jpg"),
            },
            {
                name : "Classical",
                img : require("../assets/c4.jpg"),
            },
            {
                name : "Melancholy",
                img : require("../assets/c5.jpg"),
            },
        ]
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem = {({item, index}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => this.goToDetails(item)}>
                        <Surface style={styles.surface}>
                            <ImageBackground source={item.img} style={styles.img} blurRadius={1}>
                                <Icon name="music" color="#fff" size={22} />
                                <Text style={styles.name}>{item.name}</Text>
                            </ImageBackground>
                        </Surface></TouchableWithoutFeedback>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 230,
        marginTop: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15,
    },
    surface: {
        elevation: 15,
        height: 150,
        width: 150,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 15,
        overflow: 'hidden',
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 10,
        padding: 10,
    },
    name: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
});

export default CategoryComponent;