import React, { Component } from 'react';
import AdditionManager from './AdditionManager.jsx';
import ViewManager from './ViewManager.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      completedTasks: [],
      deletedTasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
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

  deleteTask(content) {
    let taskList = this.state.taskList;
    let index = taskList.indexOf(content);
    let deletedTasks = this.state.deletedTasks;
    deletedTasks.push(taskList.splice(index, 1));
    this.setState({
      taskList: taskList,
      deletedTasks: deletedTasks
    });
  }

  // handleEdit(prevTask, alteredTask) {

  // }

  render() {
    return (
      <div className='container-fluid m-2 p-3'>
        <h1 style={{ color: 'white' }} className='h1'>Very Simple To-Do App</h1>
        <p style={{ color: 'white' }}>Track all of the things </p><hr />
        <div className='row'>
          <div className='col-md-4'><AdditionManager addTask={this.addTask}></AdditionManager></div>
          <div className='col-md-8'><ViewManager taskList={this.state.taskList} deleteTask={this.deleteTask} /></div>
        </div>
      </div>
    );
  }
}

export default App;
