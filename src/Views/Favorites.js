import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../Components/Header';


class Favorites extends  Component{
    static  navigationOptions = {
        tabBarLabel: 'Favoritos'
    }
    render() {
        return (
            <View style={ styles.Container}>
                <Header title='Favoritos'/>
            </View>
        );
    }

}

const styles = {
    Container: {
        flex: 1,
        backgroundColor: 'black'
    }
};

export default Favorites;
