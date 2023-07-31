
import React, {useState} from 'react';
import "./Playlist.css";
import playlistData from './PlaylistData';
import searchIcon from "./assets/images/Search.svg";
import dropdownIcon from "./assets/images/Dropdown.svg";
import PlaylistSpiderman from "./PlaylistSpiderman";

function Playlist(props) {

    const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(null);
    let { homeClicked } = props;
    const {setHomeClicked } = props;

    const handlePlaylistClick = (index) => {
        setSelectedPlaylistIndex(index);
        setHomeClicked(false);
        console.log({index});
        console.log({homeClicked});
    }

    let SelectedPlaylistComponent = selectedPlaylistIndex !== null ? playlistData[selectedPlaylistIndex].playlistComponent : null;

    if(homeClicked === true){
        SelectedPlaylistComponent = null;
    }

    return(
        <div>
            { !homeClicked && SelectedPlaylistComponent !== null && <SelectedPlaylistComponent className = "hidden" /> }
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
    );
}

export default Playlist;