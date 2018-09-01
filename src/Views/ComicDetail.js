import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Header from '../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';


class ComicDetail extends Component {
    render() {
        const { comic } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1 }}>
                <Header back={() => this.props.navigation.goBack()} title="Comic" />
                <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                        <Text>{comic.title}</Text>
                        <TouchableOpacity>
                            <Icon name="md-heart" color="red" size={44} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.card} source={{ uri: `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}` }} ></Image>
                    </View>
                </View>
                
            </View>
        );
    }
}

export default ComicDetail;

const styles = {
    row: {
        flexDirection: 'row'
    },
    card: {
        borderRadius: 6, width: 150, height: 200,
        overflow: 'hidden'
    },
};