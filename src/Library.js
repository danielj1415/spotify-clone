import React from 'react';
import "./Library.css";
import enlargeIcon from "./assets/images/Enlarge.svg";
import plusIcon from "./assets/images/Plus.svg";
import rightarrowIcon from "./assets/images/RightArrow.svg";
import libraryIconGray from "./assets/images/LibraryGray.svg";
import libraryIconWhite from "./assets/images/LibraryWhite.svg";
import Playlist from './Playlist';

function Library() {

    const [isLibraryHovered, setLibraryHovered] = React.useState(false);

    return (
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
        <Playlist/>
      </div>
    );
  }
  
  export default Library;