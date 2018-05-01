import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {id : '', name: '', status: false};
  }

  componentWillMount(){
    if(this.props.itemEditting && this.props.itemEditting.id !== null){
      this.setState({
        id: this.props.itemEditting.id,
        name: this.props.itemEditting.name,
        status: this.props.itemEditting.status
      })
    } else{
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditting){
      this.setState({
        id: nextProps.itemEditting.id,
        name: nextProps.itemEditting.name,
        status: nextProps.itemEditting.status
      })
    } else{
      this.onClear();
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({[name] : value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitTask(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      id: '',
      name: '',
      statue: false
    })
  }

  render(){
    if(!this.props.isDisplayForm) return '';
    return(
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.id ?  'Update Task' : 'Create New Task'}
              <span className="fa fa-times-circle text-right" onClick={ this.onCloseForm } ></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Task Name :</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
              </div>
              <label>Status :</label>
              <select className="form-control" required="required" value={this.state.status} onChange={this.onChange} name="status">
                <option value="true">Done</option>
                <option value="false">Not Done</option>
              </select>
              <br/>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">Create</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onClear}>Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitTask: (task) => {
      dispatch(actions.onSubmitTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)