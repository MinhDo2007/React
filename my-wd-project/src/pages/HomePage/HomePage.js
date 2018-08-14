import React, { Component } from 'react';
import SlideShowContainer from './../../containers/slide_show/SlideShowContainer';
import {Redirect} from 'react-router-dom';
import TopPostContainer from './../../containers/top_post/TopPostContainer';
import IntroductionContainer from './../../containers/introduction/IntroductionContainer';
import GalleryContainer from './../../containers/gallery/GalleryContainer';
import Relatives from './../../components/relatives/Relatives'
import GroomBride from './../../components/groom_bride/GroomBride'
import LoveStory from '../../components/love_story/LoveStory';


class HomePage extends Component {
  render() {
    var {notFound} = this.props;
    if(notFound){
      return <Redirect to="/" />
    }
    return (
      <div>
        <SlideShowContainer />
        <TopPostContainer />
        <IntroductionContainer />
        <GroomBride />
        <LoveStory />
        <GalleryContainer />
        <Relatives />
      </div>
    );
  }
}

export default HomePage;
