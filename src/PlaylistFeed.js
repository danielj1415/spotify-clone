import "./PlaylistFeed.css";
import React from "react";

import playlistData from './PlaylistData';
import spotifyData from "./SpotifyPlaylistData";
import podcastData from "./PodcastData";

function PlaylistFeed() {

    const PodcastCards = podcastData.slice(0, 7);
    const SpotifyCards = spotifyData.slice(0, 7);
    const PlaylistCards1 = playlistData.slice(8, 15);
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