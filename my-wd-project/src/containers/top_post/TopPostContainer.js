import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TopPost from './../../components/top_post/TopPost';

class TopPostContainer extends Component {
  showTopPosts= (posts) => {
    let result = "";
    if(posts.length > 0){
      result = posts.map((post, index) => {
        return(
          <div className="col-md-4" key={index}>
            <a target="_blank" href={post.image}>
              <img src={post.image} alt="" />
            </a>
            <h3 className="title">{this.displayTitle(post.title)}</h3>
            <div className="content"><p className="inner">{post.description}</p></div>
          </div>
        )
      });
    }
    return result;
  }

  displayTitle = (title) => {
    let result = '';
    if(title.length > 0){
      result = (
        <Fragment>
          <span className="color-deeppink first-char">{title.charAt(0)}</span><span>{title.substring(1)}</span>
        </Fragment>
      )
    }
    return result;
  }

  render() {
    let {posts} = this.props;
    return(
      <TopPost>
        { this.showTopPosts(posts)  }
      </TopPost>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(TopPostContainer);
