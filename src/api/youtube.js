import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: process.env.React_App_YOUTUBE_API_KEY,
  },
})
