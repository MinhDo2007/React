import React, { Component } from 'react';
import './../../css/Introduction.css';
import WOW from "wowjs";

class Introduction extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  render(){
    const {children, status} = this.props;
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
              Hello and welcome! Friends and Family of the BRIDE and GROOM, welcome and thank you for being here on this important day.<br />
              For every thing there is a season and a time for every purpose under Heaven.  Now is the time for a wedding.<br />
              BRIDE and GROOM have asked you all here today to bear witness to the forming of their covenant.<br />
              Marriage will allow you a new environment to share your lives together, standing together to face life and the world, hand-in-hand.<br />
              Marriage is going to expand you as individuals, define you as a couple, and deepen your love for one another.<br />
              To be successful, you will need strength, courage, patience and a really good sense of humor.<br />
              So, let your marriage be a time of waking each morning and falling in love with each other all over again.<br />
            </i>
          </p>
          { children }
        </div>
      </div>
    )
  }
}

export default Introduction;
