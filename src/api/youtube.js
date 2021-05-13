import axios from 'axios';
const KEY = 'AIzaSyBy2n0z0yBoZ7_zLsUbfmpGqhMremYjqtk'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})