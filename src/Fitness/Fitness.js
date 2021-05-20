import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import NavigationBar from '../NavigationBar /NavigationBar';
import './Fitness.css';

class Fitness extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div style = {{ background: "black", }}>
                <NavigationBar />
            <div className="fitness-container">
                <SearchBar handleFormSubmit={this.handleSubmit}/>    {/*for card component */}
                <div>
                    <div>
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Fitness;