import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      'id': '',
      'name': '',
      'status': false
    }
  }

  componentWillMount(){
    if(this.props.task){
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.task){
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      })
    } else if(!nextProps.task){
      this.setState({
        id: '',
        name: '',
        status: false
      })
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm()
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({[name] : value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      statue: false
    })
  }

  render(){
    const {id} = this.state;
    return(
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {id !== '' ?  'Update Task' : 'Create New Task'}
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

export default TaskForm