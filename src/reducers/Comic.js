import Comic from '../Actions/Comic';

const initialState = {
    comics: [],
    selectComic: {},
    favorites: [],
    isLoading: true,
};


const comicReducer = (state = initialState, action) => {
    const { types } = Comic;
    const { type } = action;

   switch( type ) {
        case types.SET_FAVORITE: 
            return state;
        case types.SET_COMICS:
            return { ...state, comics: action.payload, isLoading: false };
        default: 
            return state;
    }
}

export default comicReducer;