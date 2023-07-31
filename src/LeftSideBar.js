
import React, {useState} from 'react';
import "./SearchHome.css"
import homeIconGray from "./assets/images/HomeGray.svg";
import homeIconWhite from "./assets/images/HomeWhite.svg";
import searchIconGray from "./assets/images/SearchGray.svg";
import searchIconWhite from "./assets/images/SearchWhite.svg";
import Playlist from "./Playlist";
import Home from "./Home";

import enlargeIcon from "./assets/images/Enlarge.svg";
import plusIcon from "./assets/images/Plus.svg";
import rightarrowIcon from "./assets/images/RightArrow.svg";
import libraryIconGray from "./assets/images/LibraryGray.svg";
import libraryIconWhite from "./assets/images/LibraryWhite.svg";
import playlistData from './PlaylistData';
import searchIcon from "./assets/images/Search.svg";
import dropdownIcon from "./assets/images/Dropdown.svg";

function LeftSideBar(){

    const [isHomeHovered, setHomeHovered] = React.useState(false);
    const [isSearchHovered, setSearchHovered] = React.useState(false);
    let [homeClicked, setHomeClicked] = React.useState(false);
    let [homeDisplayed, setHomeDisplayed] = React.useState(true);
    let [playlistDisplayed, setPlaylistDisplayed] = React.useState(false);
    const [isLibraryHovered, setLibraryHovered] = React.useState(false);
    const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(null);

    let SelectedPlaylistComponent = selectedPlaylistIndex !== null ? playlistData[selectedPlaylistIndex].playlistComponent : null;

     const handlePlaylistClick = (index) => {
        setSelectedPlaylistIndex(index);
        setPlaylistDisplayed(true);
        setHomeDisplayed(false);
    }

    const handleHomeClick = () => {
        setHomeClicked(true);
        if(!homeClicked){
            setHomeDisplayed(true);
        }
        setPlaylistDisplayed(false);
    }

    return(
        <div>
            {SelectedPlaylistComponent !== null && playlistDisplayed === true && <SelectedPlaylistComponent/>}
            {homeDisplayed === true && <Home/>}
            <div className = "mainContainer">
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
            <div className = "pageContainer">
                <div className = "rectangle">
                    <div className = "libraryiconContainer">
                        <div className= "iconContainer" 
                            onMouseEnter={() => setLibraryHovered(true)}
                            onMouseLeave={() => setLibraryHovered(false)}>
                            <img src = {isLibraryHovered ? libraryIconWhite : libraryIconGray} alt="libraryIcon" className = "icon"/>
                            <p className = {isLibraryHovered ? "componentName hovered" : "componentName"}>Your Library</p>
                        </div>
                        <div className = "plusenlargeContainer">
                            <img src = {plusIcon} alt = "plusIcon" className = "plusIcon"/>
                            <img src = {enlargeIcon} alt = "enlargeIcon" className = "enlargeIcon"/>
                        </div>
                    </div>
                    <div className = "libraryFilter">
                        <p className = "pill">Playlists</p>
                        <p className = "pill">Podcasts & Shows</p>
                        <p className = "pill">Albums</p>
                        <p className = "pill last">Downl</p>
                        <img src = {rightarrowIcon} alt = "rightArrowIcon" className = "rightarrowIcon"/>
                        {/* This is just as sample comment */}
                    </div>
                </div>
            </div>
            <div>
            {/* !homeClicked && SelectedPlaylistComponent !== null && <SelectedPlaylistComponent className = "hidden" /> */}
            <div className="playlistContainer">
                <div className="playlists">
                    <div className = "playlistsBottomRow">
                        <div className = "iconHovered">
                            <img src = {searchIcon} className = "searchIcon" alt = "searchIcon"/>
                        </div>
                        <div className = "recentsRow">
                            <p className = "recents">Recents</p>
                            <img src = {dropdownIcon} className = "dropdownIcon" alt = "dropdownIcon"/>
                        </div>
                    </div>
                    {
                        playlistData.map((playlist, index) => (
                            <div className={`playlistItem ${selectedPlaylistIndex === index ? 'clicked' : ''}` }
                            key={index}
                            >
                                <div className = "hoveredBox" onClick={() => handlePlaylistClick(index)}>
                                    <img src={playlist.image} className = "playlistImage" alt={playlist.name} />
                                    <div className = "playlistTextContainer">
                                        <p className = "playlistName">{playlist.name}</p>
                                        <p className = "playlistCreator">Daniel Jong</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default LeftSideBar;