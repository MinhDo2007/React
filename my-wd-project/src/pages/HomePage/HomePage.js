import React, { Component } from 'react';
// import SlideShowContainer from './../../containers/slide_show/SlideShowContainer';
import Nav from './../../components/nav/Nav';
import Headroom from 'react-headroom'
import {Redirect} from 'react-router-dom';
import TopPostContainer from './../../containers/top_post/TopPostContainer';
import IntroductionContainer from './../../containers/introduction/IntroductionContainer';
import GalleryContainer from './../../containers/gallery/GalleryContainer';
import Relatives from './../../components/relatives/Relatives'
import GroomBride from './../../components/groom_bride/GroomBride'
import LoveStory from '../../components/love_story/LoveStory';
import InvitationCard from '../../components/invitation-card/InvitationCard';
import BgHome from '../../components/bg_home/BgHome';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {hideNav: 'hide-nav'}
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY < document.getElementById('bg-home').offsetHeight){
      this.setState({hideNav: 'hide-nav'})
    } else {
      this.setState({hideNav: 'show-nav'})
    }
  }
  render() {
    var {notFound} = this.props;
    if(notFound){
      return <Redirect to="/" />
    }
    return (
      <div>
        <Headroom className={this.state.hideNav}>
          <Nav />
        </Headroom>
        <BgHome />
        {/* <SlideShowContainer /> */}
        <TopPostContainer />
        <IntroductionContainer />
        <GroomBride />
        <LoveStory />
        <InvitationCard />
        <GalleryContainer />
      </div>
    );
  }
}

export default HomePage;
