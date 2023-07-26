import React, { useState } from 'react';
import "./Home.css";
import playlistData from './PlaylistData';
import TopPlaylists from "./TopPlaylists";
import PlaylistFeed from "./PlaylistFeed";
import Library from "./Library";

function Home(){
    return(
    <div className="homeContainer">
        <div className="homeSubContainer">
          <TopPlaylists />
          <PlaylistFeed />
        </div>
      </div>
    );
}

export default Home;