// App.js
import React from 'react';
import SearchHome from './SearchHome';
import Library from "./Library";
import MusicMenu from "./MusicMenu";
import Home from "./Home";
import LeftSideBar from "./LeftSideBar";

function App() {
  return (
      <div className="yourMom">
        <LeftSideBar/>
        {/*<SearchHome />
        <Library />*/}
        <MusicMenu />
        {/*<Home />*/}
      </div>
      
  );
}

export default App;

