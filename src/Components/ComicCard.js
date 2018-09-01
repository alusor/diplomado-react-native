import React, {Component} from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Animated } from 'react-native';

class ComicCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
            position: new Animated.Value(-150),
        }
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            delay: 300
        }).start();
    }

    render() {
        const { data, onPress } = this.props;
        return (
            <Animated.View style={{ opacity: this.state.opacity }}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <ImageBackground  source={{ uri: `${data.thumbnail.path}/portrait_xlarge.${data.thumbnail.extension}` }} style={styles.card}>
                        <View style={styles.container}>
                            <Text style={styles.title}>{data.title}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </Animated.View>

        );


    }
}


export default ComicCard;


const styles = {
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        margin: 15,
    },
    card: {
        borderRadius: 6, width: 150, height: 200,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        borderRadius: 6,
        justifyContent: 'flex-end',
    }
};
