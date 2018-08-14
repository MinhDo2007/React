import React, {Component} from "react";
import { connect } from 'react-redux';
import './../../css/Relatives.css';
import WOW from "wowjs";

class Relatives extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  relative = (relatives) => {
    let result = ''
    if(relatives.length > 0){
      result = relatives.map((relative, index) => {
        return(
          <li key={index}>
            <div className="avatar wow fadeInUp">
              <img className="avatar" src="/images/image1.png" alt="" />
            </div>
            <div className="text wow fadeInUp">
              <div className="name">{relative.name}</div><br/>
              <p>{relative.text}</p>
            </div>
          </li>
        )
      })
    }
    return result;
  }
  render(){
    const {relatives} = this.props
    return(
      <div id="relatives" className="container">
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1s" data-wow-duration="2s">
          <h1 className="title">Relativies</h1>
        </div>
        <ul>
          {this.relative(relatives)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    relatives: state.relatives
  }
}

export default connect(mapStateToProps, null)(Relatives);