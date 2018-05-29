import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './../../pages/HomePage/Introduction';
import { actToggleReadContent } from './../../actions/index';

class IntroductionContainer extends Component {

  toggleReadContent = () => {
    this.props.toggleReadContent();
  }

  render() {
    const {status} = this.props;
    return(
      <Introduction status={status}>
        <a className="btn" onClick={this.toggleReadContent}>
          {status ? '- read less' : '+ read more'}
        </a>
      </Introduction>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.toggleReadContent
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    toggleReadContent: () => {
      dispatch(actToggleReadContent())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionContainer);
