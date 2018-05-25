import React, { Component } from 'react';
import SlideShowContainer from './../../containers/slide_show/SlideShowContainer';
import {Redirect} from 'react-router-dom';
import TopPostContainer from './../../containers/top_post/TopPostContainer';

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
      </div>
    );
  }
}

export default HomePage;
