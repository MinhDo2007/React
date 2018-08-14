import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './../../pages/HomePage/Gallery';
import GalleryModalContainer from './GalleryModalContainer';
import { actOpenModal } from './../../actions/index';
import WOW from "wowjs";

class GalleryContainer extends Component {
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
  }

  showGallery= (images) => {
    let result = '';
    let wowAnimated= '';
    if(images.length > 0){
      result = images.map((image, index) => {
        if(index === 0 || index === 4){
          wowAnimated = 'fadeInLeft'
        } else if(index === 3 || index === 7){
          wowAnimated = 'fadeInRight'
        } else if (index === 1 || index === 2){
          wowAnimated = 'fadeInUp'
        } else {
          wowAnimated = 'fadeInUp'
        }
        return(
          <div className={`column wow ${wowAnimated}`} data-wow-delay="1.25s" data-wow-duration="1.5s" key={index}>
            <img src={image.url} className="hover-shadow resize" alt="" onClick={() => this.openModal(index)} />
          </div>
        )
      })
    }
    return result;
  }

  openModal = (index) => {
    document.getElementById('myModal').style.display = "block";
    this.props.openModal(index);
  }

  render() {
    const {images, currentIndex} = this.props;
    return(
      <Gallery>
        <div className="flower-line">
          <img src="/images/green-flower-line.png" alt="" />
        </div>
        <div className="wow flipInX" data-wow-delay="1.25s" data-wow-duration="2s">
          <h1 className="title">My Wedding Gallery</h1>
        </div>
        <div className="row">
          {this.showGallery(images)}
        </div>
        <GalleryModalContainer images={images} currentIndex={currentIndex} />
      </Gallery>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.galleryImages.images,
    currentIndex: state.galleryImages.currentIndex
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    openModal: (index) => {
      dispatch(actOpenModal(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
