const SET_FAVORITE = 'SET_FAVORITE';
const SET_COMICS = 'SET_COMICS';

const setFavorite = (comic) => {
    return {
        type: SET_FAVORITE,
        payload: comic,
    };
};
const loadComics = (comics) => {
    return {
        type: SET_COMICS,
        payload: comics
    }
}


export default {
    types: {
        SET_FAVORITE,
        SET_COMICS
    },
    creators: {
        setFavorite,
        loadComics
    }
}