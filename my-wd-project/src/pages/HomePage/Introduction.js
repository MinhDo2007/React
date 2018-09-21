import React, { Component } from 'react';
import './../../css/Introduction.css';
import WOW from "wowjs";
import { translate } from 'react-i18next';

class Introduction extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  render(){
    const {children, status, t} = this.props;
    return(
      <div className="container" id="introduction">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1s" data-wow-duration="2s">
          <h1 className="title">WellCome</h1>
        </div>
        <div className="wow fadeInUp" data-wow-duration="2s">
          <p className={(status ? 'read-more' : 'content')}>
            <i>
              {t('introduction.content')}
            </i>
          </p>
          { children }
        </div>
      </div>
    )
  }
}

export default translate("common")(Introduction);
