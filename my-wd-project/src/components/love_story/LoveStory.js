import React, {Component} from "react";
import { connect } from 'react-redux';
import './../../css/LoveStory.css';
import {actHandleNextLoveStory} from './../../actions/index'
import WOW from "wowjs";
import { translate } from 'react-i18next';

class LoveStory extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
    this.waitForNext();
  }

  waitForNext = () => {
    setInterval(this.handleNext, 3000);
  }

  handleNext = () => {
    this.props.handleNext();
  }

  render(){
    const {t} = this.props
    const { indexImage, images } = this.props.images
    return(
      <div id="love-story" className="container">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1.25s" data-wow-duration="2s">
          <h1 className="title">Our Love Story</h1>
        </div>
        <div className="timeline">
          <div className="left container-content wow fadeIn" data-wow-duration="3.5s">
            <div className="content">
              <h4 className="title">First Time We Met</h4>
              <h5 className="date">20/7/1992</h5>
              <div className="image"><img src="/images/image1.png" alt="" /></div>
              <p>{t('loveStory.sentencers1')}</p>
            </div>
          </div>
          <div className="right container-content wow fadeIn" data-wow-duration="3.5s">
            <div className="content">
              <h4 className="title">We fall in love each other</h4>
              <h5 className="date">20/7/1992</h5>
              <div className="image"><img src="/images/11.JPG" alt="" /></div>
              <p>{t('loveStory.sentencers2')}</p>
            </div>
          </div>
          <div className="left container-content wow fadeIn" data-wow-duration="3.5s">
            <div className="content">
              <h4 className="title">I asked and she said Yes!</h4>
              <h5 className="date">20/7/1992</h5>
              <div className="image"><img src="/images/10.JPG" alt="" /></div>
              <p>{t('loveStory.sentencers3')}</p>
            </div>
          </div>
          <div className="right container-content wow fadeIn" data-wow-duration="3.5s">
            <div className="content">
              <h4 className="title">We decieded to marry</h4>
              <h5 className="date">20/7/1992</h5>
              <div className="image"><img src="/images/1.jpg" alt="" /></div>
              <p>{t('loveStory.sentencers4')}</p>
            </div>
          </div>
          <br/><br/><br/>
          <div className="container-content" />
        </div>
        <div className="married-image">
          <img src={images[indexImage]} alt="" />
        </div>
        <div className="flower-image">
          <img src="/images/flower.png" alt="" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: state.images
})

const mapDispatchToProps = (dispatch, props) => {
  return{
    handleNext: () => {
      dispatch(actHandleNextLoveStory())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(translate('common')(LoveStory));