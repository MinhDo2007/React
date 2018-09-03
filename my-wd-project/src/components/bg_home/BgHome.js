import React, { Component } from 'react';
import Header from './../header/Header'; 
import './../../css/BgHome.css';
import CountDown from '../count_down.js/CountDown';

class BgHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      music: false
    }
  }
  
  render(){
    const toggleMusic = () => {
      this.setState({music: !this.state.music})
      if(this.state.music){
        document.getElementById('Audio').play();
      } else {
        document.getElementById('Audio').pause();
      }
    }
    return (
      <div id="bg-home">
        <section className="bg-home cata-section">
          <div className="selection-overlay"></div>
          <div className="cata-container">
            <Header />
            <div className="name">Minh &Ly</div>
            <div className="text">WE ARE GETTING MARRIED SEPTEMBER 2018</div>
            <div className="line"><img src="/images/top-line-while.png" alt="" /></div>
          </div>
          <CountDown date={'2018-09-30T00:00:00'} />
          <div className="music" onClick={() => toggleMusic()}>
            <div className={!this.state.music ? "music-button bg-music-button-play" : "music-button bg-music-button-pause"}>
              <i className="fa fa-music"></i>
            </div>
          </div>
          {/* <audio src="/music/Beautiful In White - Shane Filan [Lossless_FLAC].flac" id="Audio" autoPlay>
            <p>If you are reading this, it is because your browser does not support the audio element.     </p>
          </audio> */}
          <audio src="/music/track1.mp3" id="Audio" autoPlay>
            <p>If you are reading this, it is because your browser does not support the audio element.     </p>
          </audio>
        </section>
      </div>
    )
  }
}

export default BgHome;
