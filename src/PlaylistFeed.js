import "./PlaylistFeed.css";
import React, { useState, useEffect } from 'react';

import playlistData from './PlaylistData';
import spotifyData from "./SpotifyPlaylistData";
import podcastData from "./PodcastData";

function PlaylistFeed() {

    let PodcastCards = podcastData.slice(0, 7);
    let SpotifyCards = spotifyData.slice(0, 7);
    let PlaylistCards1 = playlistData.slice(8, 15);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        // Add event listener to update windowWidth on window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener when component unmounts
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    if(windowWidth <= 1512){
        PodcastCards = podcastData.slice(0, 5);
        SpotifyCards = spotifyData.slice(0, 5);
        PlaylistCards1 = playlistData.slice(8, 13);
    }
    return(
        <div className = "padding">
            <div className = "showTitleAll">
                <p className = "subHeading">Your shows</p>
                <p className = "showAll">Show all</p>
            </div>
            <div className="yourShows">
            {PodcastCards.map((podcast, index) => (
                <div className="playlistCard2" key={index}>
                    <img src={podcast.image} className="playlistPicture2" />
                    <p className="playlistTitle2">{podcast.name}</p>
                    <p className="playlistCreator2">{podcast.artist}</p>
                </div>
            ))}
            </div>
            <div className = "showTitleAll">
                <p className = "subHeading">Uniquely Yours</p>
                <p className = "showAll">Show all</p>
            </div>
            <div className="yourShows">
            {SpotifyCards.map((spotify, index) => (
                <div className="playlistCard2" key={index}>
                    <img src={spotify.image} className="playlistPicture2" />
                    <p className="playlistTitle2">{spotify.name}</p>
                    <p className="playlistCreator2">{spotify.caption}</p>
                </div>
            ))}
            </div>
            <div className = "showTitleAll">
                <p className = "subHeading">Jump back in</p>
                <p className = "showAll">Show all</p>
            </div>
            <div className="yourShows">
            {PlaylistCards1.map((playlist1, index) => (
                <div className="playlistCard2" key={index}>
                    <img src={playlist1.image} className="playlistPicture2" />
                    <p className="playlistTitle2">{playlist1.name}</p>
                    <p className="playlistCreator2">By {playlist1.creator}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default PlaylistFeed;