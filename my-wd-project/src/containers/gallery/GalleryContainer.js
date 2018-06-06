import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './../../pages/HomePage/Gallery';
import GalleryModalContainer from './GalleryModalContainer';
import { actOpenModal } from './../../actions/index';

class GalleryContainer extends Component {

  showGallery= (images) => {
    let result = '';
    if(images.length > 0){
      result = images.map((image, index) => {
        return(
          <div className="column" key={index}>
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
