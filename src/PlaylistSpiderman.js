// PlaylistSpiderman.js

import React from 'react';
import profilePicture from "./assets/images/ProfilePicture.png";
import playlistData from "./PlaylistData";
import PlaylistImageSpiderman from "./assets/images/playlistImages/playlist1.png";
import "./PlaylistSpiderman.css";
import PlaylistPause from "./assets/images/icons/PlaylistPause.svg";
import PlaylistPlaying from "./assets/images/icons/PlaylistPlaying.svg";
import PlaylistDownloadGray from "./assets/images/icons/PlaylistDownloadGray.svg";
import PlaylistDownloadWhite from "./assets/images/icons/PlaylistDownloadWhite.svg";
import PlaylistEnhanceGray from "./assets/images/icons/PlaylistEnhanceGray.svg";
import PlaylistEnhanceWhite from "./assets/images/icons/PlaylistEnhanceWhite.svg";
import PlaylistInviteGray from "./assets/images/icons/PlaylistInviteGray.svg";
import PlaylistInviteWhite from "./assets/images/icons/PlaylistInviteWhite.svg";
import PlaylistMoreGray from "./assets/images/icons/PlaylistMoreGray.svg";
import PlaylistMoreWhite from "./assets/images/icons/PlaylistMoreWhite.svg";

function PlaylistSpiderman() {
  return (
    <div>
      <div className = "spidermanContainer">
        <div className = "topGradientSpiderman">
          <div className = "playlistInformation">
            <img src = {PlaylistImageSpiderman} className = "playlistCoverSpiderman"/>
            <div className = "publicNameInfo">
              <p className = "fs14 white bold publicPlaylist">Public Playlist</p>
              <p className = "fs96 white bold">{playlistData[0].name}</p>
              <div className= "profileCreatorSongInfo">
                <img src = {profilePicture} className = "profilePicture noBubble"/>
                <p className = "fs14 white bold">{playlistData[0].creator}</p>
                <p className = "white dot">•</p>
                <p className = "fs14 white">9 songs, </p>
                <p className = "fs14 gray totalMinutes">30 min 48 sec</p>
              </div>
            </div>
          </div>
        </div>
        <div className = "bottomGradientSpiderman">
        
        </div>
      </div>
    </div>
  );
}

export default PlaylistSpiderman;
