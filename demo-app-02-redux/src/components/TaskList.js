import React, { Component } from 'react';
import TaskItem from './TaskItem';
import * as actions from './../actions/index';
import {connect} from 'react-redux';


class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1 // all: -1, done: 1, no done: 0
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.filterTask({
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    })
    this.setState({[name]: value})
  }

  render(){
    var {tasks, filter, keyword, sort} = this.props;
    const {filterName, filterStatus} = this.state;

    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter((task) => {
        if(filter.status.toString() === "-1"){
          return tasks
        }else {
          return task.status.toString() === filter.status;
        }
      })
    }

    if(keyword){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if(sort.by === 'name'){
      tasks = tasks.sort((a, b) => {
        if(a.name > b.name) return sort.value;
        else if(a.name < b.name) return -sort.value;
        else return 0;
      })
    } else{
      tasks = tasks.sort((a, b) => {
        if(a.status > b.status) return -sort.value;
        else if(a.status < b.status) return sort.value;
        else return 0;
      })
    }

    var elementTask = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task}
               onDelete={this.props.onDelete}
             />
    })
    return(
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
            </td>
            <td>
              <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange} >
                  <option value="-1">All Status</option>
                  <option value="true">Done</option>
                  <option value="false">Not Done</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elementTask}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter,
    keyword: state.search,
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    filterTask: (filter) => {
      console.log(filter);
      dispatch(actions.filter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)