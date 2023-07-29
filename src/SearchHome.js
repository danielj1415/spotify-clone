
import React from 'react';
import "./SearchHome.css"
import homeIconGray from "./assets/images/HomeGray.svg";
import homeIconWhite from "./assets/images/HomeWhite.svg";
import searchIconGray from "./assets/images/SearchGray.svg";
import searchIconWhite from "./assets/images/SearchWhite.svg";
import Home from "./Home";

function SearchHome(){

    const [isHomeHovered, setHomeHovered] = React.useState(false);
    const [isSearchHovered, setSearchHovered] = React.useState(false);
    const [homeClicked, setHomeClicked] = React.useState(false);
    const [zIndexValue, setZIndexValue] = React.useState(2);

    const handleHomeClick = () => {
        setHomeClicked(!homeClicked);
        setZIndexValue((prevZIndex) => prevZIndex + 2); // Increment the z-index by 2 each time it's clicked
        console.log("homeClicked");
        console.log(zIndexValue);
    }
    return(
        <div className = "mainContainer">
            {homeClicked && <Home style = {{zIndex: zIndexValue}}/>}
            <div className = "iconText" 
                onMouseEnter={() => setHomeHovered(true)}
                onMouseLeave={() => setHomeHovered(false)}
                onClick = {handleHomeClick}>
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