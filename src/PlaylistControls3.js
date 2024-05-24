import React from "react";
import "./PlaylistControls3.css";

import PlaylistClockGray from "./assets/images/icons/PlaylistClockGray.svg";
import PlaylistClockWhite from "./assets/images/icons/PlaylistClockWhite.svg";

function PlaylistControls3 () {
    
    const [isClockHovered, setClockHovered] = React.useState(false);
    return(
    <div className = "playlistControls3">
        <p className = "playlistIndex fs14 gray">#</p>
        <p className = "playlistsTitle fs14 gray">Title</p>
        <p className = "playlistAlbum fs14 gray">Album</p>
        <p className = "playlistDate fs14 gray">Date added</p>
        <img src = {isClockHovered ? PlaylistClockWhite : PlaylistClockGray} className = "playlistDuration"
        onMouseEnter={() => setClockHovered(true)}
        onMouseLeave={() => setClockHovered(false)}/>
    </div>);
}

export default PlaylistControls3