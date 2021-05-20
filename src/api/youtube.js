import axios from 'axios';
const KEY = 'AIzaSyAxW4gWwXiOI9hDFnfTvPQLmBzI3fpWzNA'; // mention your youtube API key here

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});
