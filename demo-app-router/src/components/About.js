import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class About extends Component {
  constructor(props){
    super(props)
    this.state ={
      isChecked: false
    }
  }

  setRedirect = (status) => {
    this.setState({
      isChecked: status
    })
  }

  render() {
    var {isChecked} = this.state;
    return (
      <div>
        <h1>This is About Page</h1>
        <button type="button" className="btn btn-default" onClick={() => this.setRedirect(false)} >Accept Redirect</button>
        <button type="button" className="btn btn-danger" onClick={() => this.setRedirect(true)} >Dont Accept Redirect</button>
        <Prompt
          when={isChecked}
          message={location => (`Are you ready go to ${location.pathname}`)}
        />
      </div>

    );
  }
}

export default About;
