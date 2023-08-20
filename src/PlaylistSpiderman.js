// PlaylistSpiderman.js

import React, {useState} from 'react';
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
import PlaylistSearchGray from "./assets/images/SearchGray.svg";
import PlaylistSearchWhite from "./assets/images/SearchWhite.svg";
import PlaylistDropdownGray from "./assets/images/Dropdown.svg";
import PlaylistDropdownWhite from "./assets/images/icons/PlaylistDropdownWhite.svg";
import PlaylistClockGray from "./assets/images/icons/PlaylistClockGray.svg";
import PlaylistClockWhite from "./assets/images/icons/PlaylistClockWhite.svg";

function PlaylistSpiderman() {

  const [isPlaybuttonClicked, setPlaybuttonClicked] = React.useState(false);
  const [isEnhanceHovered, setEnhanceHovered] = React.useState(false);
  const [isDownloadHovered, setDownloadHovered] = React.useState(false);
  const [isInviteHovered, setInviteHovered] = React.useState(false);
  const [isMoreHovered, setMoreHovered] = React.useState(false);
  const [isSearchHovered, setSearchHovered] = React.useState(false);
  const [isCustomHovered, setCustomHovered] = React.useState(false);
  const [isDropdownHovered, setDropdownHovered] = React.useState(false);
  const [isIndexHovered, setIndexHovered] = React.useState(false);
  const [isTitleHovered, setTitleHovered] = React.useState(false);
  const [isAlbumHovered, setAlbumHovered] = React.useState(false);
  const [isDateHovered, setDateHovered] = React.useState(false);
  const [isClockHovered, setClockHovered] = React.useState(false);


  const togglePlay = () => {
    setPlaybuttonClicked(!isPlaybuttonClicked);
  }

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
          <div className = "playlistControlsControls">
            <div className = "playlistControls1">
              <img src = {isPlaybuttonClicked ? PlaylistPlaying : PlaylistPause} className = "playlistPause"
              onClick = {togglePlay}/>
              <img src = {isEnhanceHovered ? PlaylistEnhanceWhite : PlaylistEnhanceGray} className = "playlistEnhance"
              onMouseEnter={() => setEnhanceHovered(true)}
              onMouseLeave={() => setEnhanceHovered(false)}/>
              <img src = {isDownloadHovered ? PlaylistDownloadWhite : PlaylistDownloadGray} className = "playlistDownload"
              onMouseEnter={() => setDownloadHovered(true)}
              onMouseLeave={() => setDownloadHovered(false)}/>
              <img src = {isInviteHovered ? PlaylistInviteWhite : PlaylistInviteGray} className = "playlistInvite"
              onMouseEnter={() => setInviteHovered(true)}
              onMouseLeave={() => setInviteHovered(false)}/>
              <img src = {isMoreHovered ? PlaylistMoreWhite : PlaylistMoreGray} className = "playlistMore"
              onMouseEnter={() => setMoreHovered(true)}
              onMouseLeave={() => setMoreHovered(false)}/>
            </div>
            <div className = "playlistControls2">
              <img src = {isSearchHovered ? PlaylistSearchWhite : PlaylistSearchGray} className = "playlistSearch"
              onMouseEnter={() => setSearchHovered(true)}
              onMouseLeave={() => setSearchHovered(false)}/>
              <p className = {isCustomHovered ? "playlistCustom white fs14" : "playlistCustom gray fs14"}
              onMouseEnter={() => setCustomHovered(true)}
              onMouseLeave={() => setCustomHovered(false)}>Custom Order</p>
              <img src = {isDropdownHovered ? PlaylistDropdownWhite : PlaylistDropdownGray} className = "playlistDropdown"
              onMouseEnter={() => setDropdownHovered(true)}
              onMouseLeave={() => setDropdownHovered(false)}/>
            </div>
          </div>
          <div className = "playlistControls3">
            <p className = {isIndexHovered ? " playlistIndex fs14 white" : "playlistIndex fs14 gray"}
            onMouseEnter={() => setIndexHovered(true)}
            onMouseLeave={() => setIndexHovered(false)}>#</p>
            <p className = {isTitleHovered ? "playlistsTitle fs14 white" : "playlistsTitle fs14 gray"}
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}>Title</p>
            <p className = {isAlbumHovered ? "playlistAlbum fs14 white" : "playlistAlbum fs14 gray"}
            onMouseEnter={() => setAlbumHovered(true)}
            onMouseLeave={() => setAlbumHovered(false)}>Album</p>
            <p className = {isDateHovered ? "playlistDate fs14 white" : "playlistDate fs14 gray"}
            onMouseEnter={() => setDateHovered(true)}
            onMouseLeave={() => setDateHovered(false)}>Date added</p>
            <img src = {isClockHovered ? PlaylistClockWhite : PlaylistClockGray} className = "playlistClock"
            onMouseEnter={() => setClockHovered(true)}
            onMouseLeave={() => setClockHovered(false)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistSpiderman;
