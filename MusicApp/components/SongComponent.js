import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions, FlatList, TouchableWithoutFeedback, Image, Modal, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';

class SOngData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }
    playSong = item => {
        this.closeModal();
        this.props.navigation.navigate('Player', {item: item});
    };
    
    
    openModal = () => {
        this.setState({
            modalVisible: true,
        });
    };
    
    closeModal = () => {
        this.setState({
            modalVisible: false,
        });
    };
    
    render() {
        let item = this.props.item;
        return (
            <View>
                <Modal
                    transparent={true}
                    onRequestClose={() => this.closeModal()}
                    visible={this.state.modalVisible}
                    animationType="slide">
                    <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <View style={styles.modal}>
                            <Surface style={styles.surface}>
                                <Image source={item.img} style={styles.modalImg} />
                            </Surface>
                            
                            <View style={styles.modalData}>
                                <View style={styles.playerContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                                    <TouchableOpacity style={styles.btn} onPress={() => this.playSong(item)}>
                                        <Icon name="play" size={30} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.option}>
                                    <Icon name="heart" size={30} color="#ff5b77" />
                                    <Text style={styles.text}>Add To Favourite</Text>
                                </View>
                                <View style={styles.option}>
                                    <Icon name="playlist-plus" size={30} color="#000" />
                                    <Text style={styles.text}>Add To Playlist</Text>
                                </View>
                                <View style={styles.option}>
                                    <Icon name="album" size={30} color="#000" />
                                    <Text style={styles.text}>Create Album</Text>
                                </View>
                                <View style={styles.option}>
                                    <Icon name="download" size={30} color="#000" />
                                    <Text style={styles.text}>Download</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                
                <TouchableWithoutFeedback
                    style={styles.songContainer}
                    onPress={() => this.playSong(item)}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.dataContainer}>
                            <Text style={styles.songtitle}>{item.title}</Text>
                            <Text style={styles.subTitle}>{item.subTitle}</Text>
                            <Text style={styles.subTitle}>{item.duration}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="download"
                                color="gray"
                                size={20}
                                style={{marginRight: 5}}
                            />
                            <TouchableOpacity onPress={() => this.openModal()}>
                                <Icon name="dots-vertical" color="gray" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}




class SongComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    separator = () => {
        return <View style={{height: 10, backgroundColor: '#fff'}} />;
    };
    render() {
        let songs = [
            {
                title: 'Believer',
                subTitle: 'Imagine Dragons',
                duration: '3m 36s',
                uri : require('../assets/S1.mp3'),
                img: require('../assets/s1.jpg'),
            },
            {
                title: 'Ve Maahi',
                subTitle: 'Kesari',
                duration: '3m 44s',
                uri : require('../assets/S2.mp3'),
                img: require('../assets/s2.jpg'),
            },
            {
                title: 'Shayad',
                subTitle: 'Love Aaj Kal 2',
                duration: '4m 7s',
                uri : require('../assets/S3.mp3'),
                img: require('../assets/s3.jpg'),
            },
            {
                title: 'Soch Na Sake',
                subTitle: 'Airlift',
                duration: '4m 40s',
                uri : require('../assets/S4.mp3'),
                img: require('../assets/s4.jpeg'),
            },
            {
                title: 'Sanu Ek Paal Chain',
                subTitle: 'Raid',
                duration: '3m 30s',
                uri : require('../assets/S5.mp3'),
                img: require('../assets/s5.jpg'),
            },
            {
                title: 'Pal Pal Dil Ke Pass',
                subTitle: 'Pal Pal Dil Ke Pass',
                duration: '4m 14s',
                uri : require('../assets/S6.mp3'),
                img: require('../assets/s6.jpg'),
            },
            {
                title: 'O Saathi',
                subTitle: 'Baaghi 2',
                duration: '4m 12s',
                uri : require('../assets/S7.mp3'),
                img: require('../assets/s7.jpg'),
            },
            {
                title: 'Jab Tak',
                subTitle: 'MS Dhoni : The Untold Story',
                duration: '2m 49s',
                uri : require('../assets/S8.mp3'),
                img: require('../assets/s8.jpg'),
            },
        ]
        return (
            <View style={styles.container}>
                <View style={{padding : 10, paddingTop : 10}}>
                <FlatList
                    data={songs}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => this.separator()}
                    renderItem = {({item, index}) => {
                        return (
                            <SOngData item={item} navigation={this.props.navigation} />
                        );
                    }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    songContainer: {
        width: width,
        height: 80,
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 5,
    },
    dataContainer: {
        paddingLeft: 10,
        width: width - 140,
    },
    songtitle: {
        fontSize: 18,
        color: '#000',
    },
    subTitle: {
        fontSize: 16,
        color: 'gray',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modal: {
        height: '55%',
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
    },
    modalImg: {
        height: 180,
        width: 180,
    },
    surface: {
        height: 180,
        width: 180,
        alignSelf: 'center',
        position: 'absolute',
        overflow: 'hidden',
        top: -100,
        borderRadius: 20,
        elevation: 20,
    },
    modalData: {
        marginTop: 100,
    },
    option: {
        height: 50,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e5e5',
    },
    text: {
        marginLeft: 15,
        color: '#000',
        fontSize: 20,
    },
    playerContainer: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#ff5b77',
        elevation: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SongComponent;