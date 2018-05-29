import React, { Component } from 'react';
import SlideShowContainer from './../../containers/slide_show/SlideShowContainer';
import {Redirect} from 'react-router-dom';
import TopPostContainer from './../../containers/top_post/TopPostContainer';
import IntroductionContainer from './../../containers/introduction/IntroductionContainer';

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
      </div>
    );
  }
}

export default HomePage;
