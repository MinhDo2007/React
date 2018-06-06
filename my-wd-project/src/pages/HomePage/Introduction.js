import React, { Component } from 'react';
import './../../css/Introduction.css';

class Introduction extends Component {
  render(){
    const {children, status} = this.props;
    return(
      <div className="container" id="introduction">
        <h1 className="title">WellCome</h1>
        <p className={(status ? 'read-more' : 'content')}>
          <i>
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
          </i>
        </p>
        { children }
      </div>
    )
  }
}

export default Introduction;
