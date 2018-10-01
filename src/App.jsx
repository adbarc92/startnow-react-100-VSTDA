import React, { Component } from 'react';
import AdditionManager from './AdditionManager.jsx';
import ViewManager from './ViewManager.jsx';

// https://stackoverflow.com/questions/42315990/how-to-set-placeholder-for-dropdown-in-react-js

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      completedTasks: []
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    const taskList = this.state.taskList;
    var newTask = {
      content: task.content,
      priority: task.priority,
      isBeingEdited: false
    };
    this.setState({
      taskList: taskList.concat([
        newTask
      ])
    });
  }

  handleEdit(task) {
  }

  handleDelete(task) { }

  render() {
    return (
      <div className='container-fluid m-2 p-3'>
        <h1 style={{ color: 'white' }} className='h1'>Very Simple To-Do App</h1>
        <p style={{ color: 'white' }}>Track all of the things </p><hr />
        <div className='row'>
          <div className='col-md-4'><AdditionManager addTask={this.addTask}></AdditionManager></div>
          <div className='col-md-8'><ViewManager taskList={this.state.taskList} /></div>
        </div>
      </div>
    );
  }
}

export default App;
