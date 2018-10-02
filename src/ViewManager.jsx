import React, { Component } from 'react';
import TaskItem from './TaskComp.jsx';

class ViewManager extends Component {
  constructor(props) {
    super(props);
    this.renderTasks = this.renderTasks.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  renderTasks() {
    var taskList = this.props.taskList;
    return (
      taskList.map((elem, i) => {
        return (
          <TaskItem
            editMode={elem.editMode}
            className='no-margin no-padding'
            delete={this.handleDelete}
            priority={elem.priority}
            content={elem.content}
            editTask={this.props.editTask}
            toggleEdit={this.props.toggleEdit}
            toggleComplete={this.props.toggleComplete}
            completed={elem.completed}
            key={i}
            index={i}
          />
        )
      }))
  }

  handleDelete(e) {
    this.props.deleteTask(e.target.content);
  }

  render() {
    var taskList = this.props.taskList;
    console.log('renderTask:', this.renderTasks);

    if (taskList.length === 0) {
      return (
        <div className='card no-margin no-padding'>
          <div className='card-header px-2'>View Tasks</div>
          <div className='alert alert-primary mb-0 pb-0' role='alert'>
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
          <ul className='list-group'>{this.renderTasks()}</ul>
        </div>
      </div>
    )
  }
}

export default ViewManager;
