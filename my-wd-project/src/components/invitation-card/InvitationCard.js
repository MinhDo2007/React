import React, { Component } from 'react'
import './../../css/InvitationCard.css'
import WOW from "wowjs";

class InvitationCard extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  render(){
    return(
      <div id="invitation-card">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1.25s" data-wow-duration="2s">
          <h1 className="title">Invitation Card</h1>
        </div>
        <section className="invitation-card cata-section">
          <div className="selection-overlay"></div>
          <div className="cata-container">
            <div className="content">
              <div className="title">Invitation Card</div>
              <div className="name">Minh & Ly</div>
              <div><img src="/images/line_bottom.png" alt="" /></div>
              <div className="time">
                Sunday, 30 September 2018<br />
                08:00 PM - 14:00PM
              </div>
              <div className="address">
                Xom Chung - Hoa Xa - Ung Hoa - Ha Noi <br />
                Xom Thuong Doan - Hoa Xa - Ung Hoa - Ha Noi
              </div>
              <br /><br /><br /><br /><br />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default InvitationCard