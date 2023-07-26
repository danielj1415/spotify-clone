import React, { useState, useEffect } from 'react';
import "./TopPlaylists.css";

import leftArrow from "./assets/images/icons/LeftArrow.svg";
import rightArrow from "./assets/images/icons/RightArrow.svg";
import SamplePlaylist from "./assets/images/SamplePlaylist.png";
import profilePicture from "./assets/images/ProfilePicture.png";
import friendGray from "./assets/images/icons/FriendGray.svg";

import playlistData from './PlaylistData';

function TopPlaylists(){
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour < 12) {
        setTimeOfDay('Good Morning');
        } else if (currentHour < 18) {
        setTimeOfDay('Good Afternoon');
        } else {
        setTimeOfDay('Good Evening');
        }
    }, []);

    return(
        <div className = "topPlaylists">
            <div className = "homeIconsContainer">
                <div className = "leftSetIcons">
                    <img src = {leftArrow} className = "arrowIcon left unclickable"/>
                    <img src = {rightArrow} className = "arrowIcon right"/>
                </div>
                <div className = "rightSetIcons">
                    <img src = {friendGray} className = "friendIcon"/>
                    <img src = {profilePicture} className = "profilePicture"/>
                </div>
            </div>
            <div className = "recommendedPlaylists">
                <p className = "heading">{timeOfDay}</p>
                <div className="playlistsGrid">
                {playlistData.map((playlist) => (
                    <div className="playlistCard1" key={playlist.id} >
                    <img src={playlist.image} className="playlistPicture" />
                    <div className="playlistCard1Background">
                        <p className="playlistTitle">{playlist.name}</p>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default TopPlaylists;