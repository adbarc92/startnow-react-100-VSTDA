import React, { Component } from 'react';
import TaskItem from './TaskItem.jsx';

// handleDelete(key)
// handleComplete(key): add complete prop to task elem
// handleEdit(key)
// Add edit prop to task elem

class ViewManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      completedTasks: []
    }
    this.renderTasks = this.renderTasks.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleComplete = this.handleComplete.bind(this);
  }

  renderTasks() {
    var taskList = this.props.taskList;
    return (
      taskList.map((elem, i) => {
        return (
          <TaskItem
            className='no-margin no-padding'
            priority={elem.priority}
            content={elem.content}
            key={i}
          />
        )
      }))
  }

  render() {
    var taskList = this.props.taskList;
    console.log(taskList.length);
    console.log('renderTask:', this.renderTasks);

    if (taskList.length === 0) {
      return (
        <div className='card no-margin no-padding'>
          <div className='card-header px-2'>View Tasks</div>
          <div className='alert alert-primary no-padding no-margin' role='alert'>
            <p className='pl-1'><strong>Welcome to Very Simple To-Do App!</strong>
              <small>Get started now by adding a new task on the left.</small></p>
          </div>
        </div>
      )
    }

    return (
      <div className='card'>
        <div className='card-header px-2'>View Tasks</div>
        <div className='card-body no-margin no-padding'>
          <div>{this.renderTasks()}</div>
        </div>
      </div>
    )
  }
}

export default ViewManager;
