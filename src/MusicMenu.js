import React, { useState, useEffect } from 'react';
import './MusicMenu.css';
import heartIconGray from "./assets/images/Heart1.svg";
import heartIconGreen from "./assets/images/Heart2.svg";
import heartIconWhite from "./assets/images/Heart3.svg";
import shuffleGray from "./assets/images/icons/ShuffleGray.svg";
import shuffleWhite from "./assets/images/icons/ShuffleWhite.svg";
import shuffleGreen from "./assets/images/icons/ShuffleGreen.svg";
import backGray from "./assets/images/icons/BackGray.svg";
import backWhite from "./assets/images/icons/BackWhite.svg";
import playing from "./assets/images/icons/Playing.svg";
import forwardGray from "./assets/images/icons/ForwardGray.svg";
import forwardWhite from "./assets/images/icons/ForwardWhite.svg";
import loopGray from "./assets/images/icons/LoopGray.svg";
import loopWhite from "./assets/images/icons/LoopWhite.svg";
import loopGreen from "./assets/images/icons/LoopGreen.svg";
import songSlider from "./assets/images/icons/Slider.svg";
import queueGray from "./assets/images/icons/QueueGray.svg";
import deviceGray from "./assets/images/icons/DeviceGray.svg";
import volumeGray from "./assets/images/icons/VolumeGray.svg";
import volumeSlider from "./assets/images/icons/VolumeSlider.svg";
import expandGray from "./assets/images/icons/ExpandGray.svg";
import playlist2 from "./assets/images/playlistImages/playlist2.png"
import pause from "./assets/images/icons/Pause.svg";
import talkKeshi from "./assets/songs/keshi-talk.mp3";

function MusicMenu() {

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isHeartHovered, setHeartHovered] = useState(false);
  const [isHeartSelected, setHeartSelected] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [isShuffleHovered, setShuffleHovered] = useState(false);
  const [isBackHovered, setBackHovered] = useState(false);
  const [isForwardHovered, setForwardHovered] = useState(false);

  const [isLoopHovered, setLoopHovered] = useState(false);
  const [isLoopSelected, setLoopSelected] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('audio-element');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      audio.volume = 0.08;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = document.getElementById('audio-element');
    
    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSliderClick = (event) => {
    const audio = document.getElementById('audio-element');
    const sliderWidth = event.currentTarget.clientWidth;
    const clickPosition = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const seekTime = (clickPosition / sliderWidth) * duration;
    audio.currentTime = seekTime;
  };

  const toggleHeart = () => {
    setHeartSelected(!isHeartSelected);
  };

  const toggleLoop = () => {
    setLoopSelected(!isLoopSelected);
    const audio = document.getElementById("audio-element");
    audio.loop = !audio.loop;
  }

  return (
    <div className="page-container">
      <div className="black-rectangle">
        <div className = "songInfo">
          <img src = {playlist2} className = "songPlaying" alt = "song1"/>
          <div>
            <p className = "songName">talk</p>
            <p className = "songArtist">Keshi</p>
          </div>
          <img src = {isHeartSelected ? heartIconGreen : isHeartHovered ? heartIconWhite : heartIconGray} className = "heartIcon" alt = "heartIcon" 
          onMouseEnter={() => setHeartHovered(true)}
          onMouseLeave={() => setHeartHovered(false)}
          onClick = {toggleHeart}/>
        </div>
        <div className = "songControls">
          <div className = "songButtons">
            <img src = {isShuffleHovered ? shuffleWhite : shuffleGray} className = "shuffleGray" alt = "shuffleGray" 
            onMouseEnter={() => setShuffleHovered(true)}
            onMouseLeave={() => setShuffleHovered(false)}/>
            <img src = {isBackHovered ? backWhite : backGray} className = "backGray" alt = "backGray" 
            onMouseEnter={() => setBackHovered(true)}
            onMouseLeave={() => setBackHovered(false)}/>
            <audio id="audio-element" src = {talkKeshi}/>
            <img src = {isPlaying ? playing : pause} className = "playing" alt = "playing" onClick = {togglePlay}/>
            <img src = {isForwardHovered? forwardWhite : forwardGray} className = "forwardGray" alt = "forwardGray" 
            onMouseEnter={() => setForwardHovered(true)}
            onMouseLeave={() => setForwardHovered(false)}/>
            <img src = {isLoopSelected ? loopGreen : isLoopHovered? loopWhite : loopGray} className = "loopGray" alt = "loopGray" 
            onMouseEnter={() => setLoopHovered(true)}
            onMouseLeave={() => setLoopHovered(false)}
            onClick = {toggleLoop}/>
          </div>
          <div className="sliderInfo">
            <p className="song start">{formatTime(currentTime)}</p>
            <div className="songSlider" onClick={handleSliderClick}>
              <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}>
                <img src = {songSlider}></img>
              </div>
            </div>
            <p className="song end">{formatTime(duration)}</p>
          </div>
        </div>
        <div className = "otherControls">
          <img src = {queueGray} className = "queueGray" alt = "queueGray"/>
          <img src = {deviceGray} className = "deviceGray" alt = "deviceGray"/>
          <img src = {volumeGray} className = "volumeGray" alt = "volumeGray"/>
          <img src = {volumeSlider} className = "volumeSlider" alt = "volumeSlider"/>
          <img src = {expandGray} className = "expandGray" alt = "expandGray"/>
        </div>
      </div>
    </div>
  );
}

export default MusicMenu;
