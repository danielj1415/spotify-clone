import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import "./MusicMenu.css";
import "./Library.css";
import "./SearchHome.css";
import "./Home.css";
import "./TopPlaylists.css";
import "./PlaylistFeed.css";
import "./PlaylistSpiderman.css";
import "./PlaylistKeshi.css";
import "./PlaylistLaufey.css";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
