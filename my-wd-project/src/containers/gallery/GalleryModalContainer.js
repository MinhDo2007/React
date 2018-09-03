import React, { Component } from 'react';
import './../../css/Gallery.css';
import { actChangeImage, actNextImage, actPrevImage } from './../../actions/index';
import { connect } from 'react-redux';

class GalleryModalContainer extends Component {
  myImages = (images, currentIndex) => {
    let result = '';
    if(images.length > 0){
      result = images.map((image, index) => {
        return(
          <div className={'mySlides ' + (index === currentIndex ? 'show' : 'hide')} key={index}>
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img className="my-image resize-thumb" src={image.url} alt="" />
          </div>
        )
      })
    }
    return result;
  }

  changeImage = (index) => {
    this.props.changeImage(index);
  }

  subImages = (images, currentIndex) => {
    let result = '';
    if(images.length > 0){
      result = images.map((image, index) => {
        return(
          <div key={index}>
            <img className={ 'cursor sub-images my-image ' + (index === currentIndex ? 'active' : 'demo')}
              onClick={()=>this.changeImage(index)} src={image.url} alt="" />
          </div>
        )
      })
    }
    return result;
  }
  closeModal = () => {
    document.getElementById('myModal').style.display = "none";
  }

  prevImage = () => {
    this.props.prevImage();
  }

  nextImage = () => {
    this.props.nextImage();
  }

  handleCloseModal = () => {
    this.closeModal();
  }

  componentDidMount(){
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) this.handleCloseModal();
    });
  }

  render(){
    const {images, currentIndex} = this.props;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close cursor" onClick={this.closeModal}>&times;</span>
          <div className="modal-images">
            <div className="list-images">
              <div className="scroll-images">
                {this.subImages(images, currentIndex)}
              </div>
            </div>

            <div className="modal-image">
              <div className="caption-container">
                <h2><p id="caption"><b>{images[currentIndex].title}</b></p></h2>
              </div>

              {this.myImages(images, currentIndex)}

              <div className="caption-container">
                <p id="caption" className="description">
                  <a className="pre-img" onClick={this.prevImage}>&#10094;</a>
                  <i>{images[currentIndex].description}</i>
                  <a className="next-img" onClick={this.nextImage}>&#10095;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    changeImage: (index) => {
      dispatch(actChangeImage(index))
    },
    prevImage: () => {
      dispatch(actPrevImage())
    },
    nextImage: () => {
      dispatch(actNextImage())
    }
  }
}

export default connect(null, mapDispatchToProps)(GalleryModalContainer);
