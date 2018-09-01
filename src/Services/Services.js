import axios from 'axios';

const ts = 1;
const apikey = 'ab49a0bfc23db31e975f70967dfbc1f3';
const hash = 'd29abc968d8e7561e9113c2fadc124c4'
const BASE_URL = `http://gateway.marvel.com/v1/public/`;
const autenticationString = `?ts=${ts}&apikey=${apikey}&hash=${hash}`;

async function loadComic() {
    return axios({
        method: 'GET',
        url: `${BASE_URL}comics${autenticationString}`,
    });
}
export {
    loadComic
};
