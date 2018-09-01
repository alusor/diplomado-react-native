import { createStore, combineReducers } from 'redux';
import comicReducer from '../reducers/Comic';

const initialState = {
    
};

const reducers = combineReducers({
    comicReducer,
});

export default createStore(reducers,initialState);