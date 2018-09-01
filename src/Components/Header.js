import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default (props) => (
    <View style={styles.Header}>
        {props.back && 
            <TouchableOpacity onPress={props.back} style={ styles.button }>
                <Icon name="ios-arrow-back" size={44} ></Icon>
            </TouchableOpacity>
        }
        <Text numberOfLines={1} style={styles.Title}>{props.title}</Text>
    </View>
);


const styles = {
    Header: {
        backgroundColor: 'red',
        height: 64,
        alignItems: 'center',
        flexDirection: 'row'
    },
    Title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        width: 64,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    }
};
