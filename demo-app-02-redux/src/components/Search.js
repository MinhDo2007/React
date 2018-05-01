import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChange = (event) => {
    let keyword = event.target.value;
    this.setState({keyword});
  }

  onSearch = () => {
    this.props.search(this.state.keyword);
  }

  render(){
    var {keyword} = this.props;

    return(
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyword" value={keyword} onChange={this.onChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.onSearch}>
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    search: (keyword) => {
      dispatch(actions.search(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)