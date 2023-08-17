

import React from 'react';
import PlaylistImageLaufey from "./assets/images/playlistImages/playlist5.png";
import playlistData from "./PlaylistData";
import profilePicture from "./assets/images/ProfilePicture.png";
import "./PlaylistLaufey.css";

function PlaylistLaufey() {
  return (
    <div>
      <div className = "laufeyContainer">
        <div className = "topGradient">
          <div className = "playlistInformation">
            <img src = {PlaylistImageLaufey} className = "playlistCover"/>
            <div className = "publicNameInfo">
              <p className = "fs14 white bold publicPlaylist">Public Playlist</p>
              <p className = "fs96 white bold">{playlistData[1].name}</p>
              <div className= "profileCreatorSongInfo">
                <img src = {profilePicture} className = "profilePicture noBubble"/>
                <p className = "fs14 white bold">{playlistData[2].creator}</p>
                <p className = "white dot">•</p>
                <p className = "fs14 white">9 songs, </p>
                <p className = "fs14 gray totalMinutes">30 min 48 sec</p>
              </div>
            </div>
          </div>
        </div>
        <div className = "bottomGradient">

        </div>
      </div>
    </div>
  );
}

export default PlaylistLaufey;