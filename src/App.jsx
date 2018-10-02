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
    this.editTask = this.editTask.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(task) {
    const taskList = this.state.taskList;
    var newTask = {
      content: task.content,
      priority: task.priority,
      editMode: false,
      completed: false,
    };
    this.setState({
      taskList: taskList.concat([
        newTask
      ])
    });
  }

  toggleEdit(index) {
    let list = this.state.taskList;
    list[index].editMode = !list[index].editMode;
    this.setState({ taskList: list });
  }

  editTask(index, newTask) {
    let taskList = this.state.taskList;
    taskList.splice(index, 1, newTask);
    this.setState({
      taskList: taskList
    });
  }

  completeTask(task) {
    let taskList = this.state.taskList;
    let index = taskList.indexOf(task.content);
    completedTasks.push(taskList[index]);
    taskList[0].completed = !taskList[0].completed;
    this.setState({
      taskList: taskList
    })
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
          <div className='col-md-8'><ViewManager taskList={this.state.taskList} deleteTask={this.deleteTask} editTask={this.editTask} toggleEdit={this.toggleEdit} completeTask={this.completeTask} /></div>
        </div>
      </div>
    );
  }
}

export default App;
