import React, {Component} from "react";
import { connect } from 'react-redux';
import './../../css/GroomBride.css';
import WOW from "wowjs";
import { translate } from 'react-i18next';

class GroomBride extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  render(){
    const {groomBride, t, i18n} = this.props
    return(
      <div id="groom-bride" className="container">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1.25s" data-wow-duration="2s">
          <h1 className="title">Groom & Bride</h1>
        </div>
        <div className="groomBrideInfo">
          <div className="avatar wow fadeInLeft groom" data-wow-duration="1s" data-wow-delay="1s">
            <img src={groomBride[0].avatar} alt="" />
          </div>
          <div className="info wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
            <div>
            <h1 className="name">{groomBride[0].name}</h1>
              <div className="text"><b>{t('groomBride.age')}:</b>{groomBride[0].age}</div>
              <div className="text"><b>{t('groomBride.address')}:</b>{groomBride[0].address}</div>
              <div className="text"><b>{t('groomBride.mobile')}:</b>{groomBride[0].mobile}</div>
              <p className="text">{t('groomBride.sentencers1')}</p>
            </div>
          </div>
        </div>
        <div className="groomBrideInfo">
          <div className="info wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
            <div>
              <h1 className="name">{groomBride[1].name}</h1>
              <div className="text"><b>{t('groomBride.age')}:</b>{groomBride[1].age}</div>
              <div className="text"><b>{t('groomBride.address')}:</b>{groomBride[1].address}</div>
              <div className="text"><b>{t('groomBride.mobile')}:</b>{groomBride[1].mobile}</div>
              <p className="text">{t('groomBride.sentencers2')}</p>
            </div>
          </div>
          <div className="avatar wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
            <img src={groomBride[1].avatar} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groomBride: state.groomBride
  }
}

export default connect(mapStateToProps, null)(translate('common')(GroomBride));