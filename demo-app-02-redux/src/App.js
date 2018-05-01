import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  onToggleForm = () => {
    var {itemEditting} = this.props;
    if(itemEditting && itemEditting.id !== ''){
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    this.props.onClearTask({id: '', name: '', status: false});
  }

  render() {
    var {isDisplayForm} = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className="row">
            {/* Form */}
          <TaskForm />
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }>
                <span className="fa fa-plus mr-5"></span>Add New Task
            </button>
            <button type="button" className="btn mf-15" onClick={ this.props.generateData }>
                <span className="fa fa-plus mr-5"></span>Generate Data
            </button>
              {/* Search And Sort*/}
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting,
    filter: state.filter
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTask: (task) => {
      dispatch(actions.onUpdate(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    generateData: () => {
      dispatch(actions.generateData())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
