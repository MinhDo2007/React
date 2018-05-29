import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideShow from './../../components/slide_show/SlideShow';
import { actHandleNext, actNextSlideShow, actPrevSlideShow } from './../../actions/index';

class SlideShowContainer extends Component {
  componentDidMount(){
    this.waitForNext();
  }

  waitForNext = () => {
    setInterval(this.handleNext, 5000);
  }

  handleNext = () => {
    this.props.handleNext();
  }

  prev = () => {
    this.props.prev();
  }

  next = () =>{
    this.props.next();
  }

  render() {
    var {images, indexImage} = this.props;
    return(
      <SlideShow>
        <ol className="carousel-indicators">
          {this.showIndicators(images, indexImage)}
        </ol>

        <div className="carousel-inner">
          {this.slideShow(images, indexImage)}
        </div>

        <a className="left carousel-control" href="#myCarousel" onClick={this.prev}>
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" onClick={this.next}>
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </SlideShow>
    )
  }

  showIndicators = (images, indexImage) => {
    var result = '';
    if(images.length > 0){
      result = images.map((image, index) => {
        return (
          <li key={index} data-target="#myCarousel" className={(index=== indexImage ? "active" : "")}></li>
        )
      })
    }
    return result;
  }

  slideShow = (images, indexImage) => {
    var result = '';
    if(images.length > 0){
      result = images.map((image, index) => {
        return (
          <div className={"item" + (index===indexImage ? "active" : "")} key={index}>
            <img src={image.url} alt="Los Angeles" className="item-image" />
            <div className="carousel-caption">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        )
      })
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  var {images, indexImage} =  state.slideShow;
  return {
    images,
    indexImage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    handleNext: () => {
      dispatch(actHandleNext())
    },
    next: () => {
      dispatch(actNextSlideShow())
    },
    prev: () => {
      dispatch(actPrevSlideShow())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideShowContainer);
