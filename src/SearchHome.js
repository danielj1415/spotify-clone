
import React from 'react';
import "./SearchHome.css"
import homeIconGray from "./assets/images/HomeGray.svg";
import homeIconWhite from "./assets/images/HomeWhite.svg";
import searchIconGray from "./assets/images/SearchGray.svg";
import searchIconWhite from "./assets/images/SearchWhite.svg";
import Playlist from "./Playlist";
import Home from "./Home";

function SearchHome({ showPlaylist, setShowPlaylist }){

    const [isHomeHovered, setHomeHovered] = React.useState(false);
    const [isSearchHovered, setSearchHovered] = React.useState(false);
    const [homeClicked, setHomeClicked] = React.useState(false);
    

    const handleHomeClick = () => {
        setHomeClicked(!homeClicked);
        //setShowPlaylist(!showPlaylist);
        //setSelectedPlaylistIndex(null);
    }

    return(
        <div className = "mainContainer">
            {homeClicked && <Home/>}
            <div className = "iconText" 
                onMouseEnter={() => setHomeHovered(true)}
                onMouseLeave={() => setHomeHovered(false)}
                onClick = {handleHomeClick}
                >
                <img src = {isHomeHovered ? homeIconWhite : homeIconGray} alt="homeIcon" className = "icon"/>
                <p className={isHomeHovered ? "text hovered" : "text"}>Home</p>
            </div>
            <div className = "iconText" 
                onMouseEnter={() => setSearchHovered(true)}
                onMouseLeave={() => setSearchHovered(false)}>
                <img src = {isSearchHovered ? searchIconWhite : searchIconGray} alt="searchIcon" className = "icon"/>
                <p className={isSearchHovered ? "text hovered" : "text"}>Search</p>
            </div>
            
        </div>
    );
}

export default SearchHome;