import React, {Component} from "react";
import { connect } from 'react-redux';
import './../../css/GroomBride.css';
import WOW from "wowjs";

class GroomBride extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  render(){
    const {groomBride} = this.props
    return(
      <div id="groom-bride" className="container">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1.25s" data-wow-duration="2s">
          <h1 className="title">Groom & Bride</h1>
        </div>
        <div className="groomBrideInfo row">
          <div className="avatar col-md-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
            <img src={groomBride[0].avatar} alt="" />
          </div>
          <div className="col-md-6 info wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
            <div>
              <h1 className="name">{groomBride[0].name}</h1>
              <p className="text">{groomBride[0].text}</p>
            </div>
          </div>
        </div>
        <div className="groomBrideInfo row">
          <div className="col-md-6 info wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
            <div>
              <h1 className="name">{groomBride[1].name}</h1>
              <p className="text">{groomBride[1].text}</p>
            </div>
          </div>
          <div className="avatar col-md-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
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

export default connect(mapStateToProps, null)(GroomBride);