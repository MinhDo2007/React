import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  }

  onUpdate = () => {
    this.props.onOpenForm();
    this.props.onUpdate(this.props.task)
  }

  render(){
    const {task, index} = this.props;
    return(
      <tr>
        <td>{index +  1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span className={task.status ? 'label label-success' : 'label label-danger'}
            onClick={this.onUpdateStatus}>
            {task.status ? 'Done' : 'Not Done'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
            <span className="fa fa-pencil mr-5"></span>Edit
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={this.onDelete}>
            <span className="fa fa-trash mr-5"></span>Delete
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = ()=> {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id))
    },
    onDelete: (id) => {
      dispatch(actions.onDelete(id))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onUpdate: (task) => {
      dispatch(actions.onUpdate(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
