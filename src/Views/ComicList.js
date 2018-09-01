import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import Header from '../Components/Header';
import { loadComic } from '../Services/Services';
import ComicCard from '../Components/ComicCard';
import { connect }  from 'react-redux';
import ComicActions from '../Actions/Comic';

class ComicList extends  Component{
    static  navigationOptions = {
        tabBarLabel: 'Lista de comics'
    }

    constructor(props){
        super(props);
    }
    async componentDidMount() {
        const response = await loadComic();
        console.log(response);
        const { results } = response.data.data;
        const {loadComics} = this.props;
        loadComics(results);

    }

    render() {
        console.log(this.props)
        return (
            <View style={ styles.Container}>
                <Header title='Lista de comics'/>
                {this.props.isLoading && <ActivityIndicator color='red' size='large'/>}
                <FlatList
                    data={this.props.comics}
                    renderItem={({item}) => <ComicCard onPress={() => this.props.navigation.navigate('ComicDetail', { comic: item })} data={item}/>}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString() }
                />
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

const mapStateToProps = (state) => {
    return { comics: state.comicReducer.comics, isLoading: state.comicReducer.isLoading };
}

const { loadComics } = ComicActions.creators;

export default connect(mapStateToProps, {
    loadComics,
})(ComicList);
