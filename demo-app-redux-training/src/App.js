import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import _ from 'lodash';
import demo from './trainning/demo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [], // id: unique, name, status
      isDisplayForm: false,
      taskEditting: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: 'name',
        value: 1
      }
    }
  }

  componentWillMount(){
    // chi dc goi duy nhat 1 lan khi reload page
    if(localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({tasks});
    }
  }

  onGenerateData = () => {
    let tasks = [
                  {
                     id: this.generateId(),
                     name: 'Study English',
                     status: true
                  },
                  {
                     id: this.generateId(),
                     name: 'Go to Gym',
                     status: false
                  },
                  {
                     id: this.generateId(),
                     name: 'Go to sleep',
                     status: true
                  }
                ]
    this.setState({tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId(){
    return this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4();
  }

  onToggleForm = () => {
    if(this.state.isDisplayForm && this.statetaskEditting !== null){
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      })
    }else{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null
      })
    }
  }

  onCloseForm = () => {
    this.setState({isDisplayForm: false})
  }

  onShowForm = () => {
    this.setState({isDisplayForm: true})
  }

  onSubmit = (data) => {
    let tasks = this.state.tasks;
    data.status = data.status === 'true' ? true : false
    if(data.id === ''){
      data.id = this.generateId();
      tasks.push(data);
    } else{
      let index = this.findIndex(data.id);
      tasks[index] = data;
      var taskEditting = null;

    }
    this.setState({tasks, taskEditting})
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }

  onUpdateStatus = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if(index !== -1){
      debugger
      tasks[index].status = !tasks[index].status;
      this.setState({tasks});
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDelete = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({tasks});
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onUpdate = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    this.setState({
      taskEditting: tasks[index]
    })
    this.onShowForm();
  }

  findIndex = (id) =>{
    let {tasks} = this.state;
    return _.findIndex(tasks, (task) => {
      return task.id === id;
    })
  }

  onFilter = (filterName, filterStatus) => {
    let name = filterName.toLowerCase();
    let status = filterStatus;
    if(filterStatus === 'true'){
      status = true;
    } else if(filterStatus === 'false'){
      status = false;
    }
    this.setState({filter: {name, status}})
  }

  onSearch = (keyword) => {
    this.setState({keyword});
  }

  onSort = (sort) => {
    this.setState({
      sort: {
        by: sort.by,
        value: sort.value
      }
    })
  }

  render() {
    var {tasks, isDisplayForm, taskEditting, filter, keyword, sort  } = this.state;
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
          return task.status === filter.status;
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
    const elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} task={taskEditting} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className="row">
            {/* Form */}
          {elmTaskForm}
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }>
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button type="button" className="btn mf-15" onClick={ this.onGenerateData }>
                <span className="fa fa-plus mr-5"></span>Generate Data
            </button>
              {/* Search And Sort*/}
            <Control onSearch={this.onSearch} onSort={this.onSort} />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onUpdate={this.onUpdate}  onFilter={this.onFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
