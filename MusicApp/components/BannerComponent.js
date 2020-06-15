import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
class BannerComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let banners = [
            {
                title : "Karoke",
                subTitle : "Sing Along",
                img : require("../assets/banner1.jpg")
            },
            {
                title : "Star Event",
                subTitle : "Singing Event",
                img : require("../assets/banner2.jpg")
            },
            {
                title : "Concert",
                subTitle : "EDM",
                img : require("../assets/banner3.jpg")
            },
        ]
        return (
            <View style={styles.container}>
                <FlatList
                    data={banners}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item, index}) => {
                        return (
                            <View style={styles.banner} key={index}>
                                <ImageBackground source={item.img} style={styles.bannerImage}>
                                    <TouchableOpacity
                                        style={styles.btn}>
                                        <Icon name="play" size={17} color="#000" />
                                        <Text style={styles.text}>Play Now</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        );
                    }}
                    />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height : 250,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15,
    },
    banner: {
        height: 230,
        width: width,
    },
    bannerImage: {
        height: 250,
        width: '100%',
    },
    btn: {
        position: 'absolute',
        bottom: 25,
        right: 15,
        borderRadius: 10,
        backgroundColor: '#cc8fe5',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 24,
        flexDirection: 'row',
    },
    text: {
        marginLeft: 3,
    },
});

export default BannerComponent