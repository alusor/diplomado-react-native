import React, {Component} from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ComicList from './Views/ComicList';
import Favorites from './Views/Favorites';
import ComicDetail from './Views/ComicDetail';

import store from './Store/store';
import { Provider } from 'react-redux';

const Tabs = createBottomTabNavigator({
    ComicList,
    Favorites
});

const Stack = createStackNavigator({
    Tabs,
    ComicDetail
},{
    navigationOptions: {
        header: null
    }
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Stack/>
            </Provider>
        );
    }
}


export default App;