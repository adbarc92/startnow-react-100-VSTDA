import React, { Component } from 'react';

// https://stackoverflow.com/questions/42315990/how-to-set-placeholder-for-dropdown-in-react-js

function Task(props) {
  var color = this.props.priority === '1' ? 'red' : (this.props.priority === '2' ? 'yellow' : 'green');
  return (
    <li priority={this.props.priority} style={{ backgroundColor: color }}>
      <checkbox></checkbox><p>{this.props.content}</p><button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

class ViewManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    }
    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks() {
    var taskList = this.props.taskList;
    return (
      taskList.map((elem, i) => {
        return (
          <Task
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
            <p><strong>Welcome to Very Simple To-Do App!</strong>
              <small>Get started now by adding a new task on the left.</small></p>
          </div>
        </div>
      )
    }

    return (
      <div className='card'>
        <div className='card-header px-2'>View Tasks</div>
        <div className='card-body'>
          <ol>{taskElem}</ol>
        </div>
      </div>
    )
  }
}

class AdditionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      priority: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    var newTask = this.state;
    this.props.addTaskToList(newTask);
    this.setState({
      content: '',
      priority: 0
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header px-2'>Add New Task</div>
        <div className='form-group p-2'>

          <label className='px-2'><strong>I want to...</strong></label>
          <textarea className='form-control' name='content' value={this.state.content} onChange={this.handleChange}></textarea>

          <label className='px-2'><strong>How much of a priority is this?</strong></label>
          <select name='priority' value={this.state.priority} onChange={this.handleChange}>
            <option value={this.state.priority} disabled>Select a Priority</option>
            <option value='1'>High</option>
            <option value='2'>Moderate</option>
            <option value='3'>Low</option>
          </select>

          <div className='card-footer'>
            <button name='btn' type='submit' className='btn btn-success btn-block' onClick={this.handleClick}>Add</button>
          </div>

        </div>
      </div >
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  addTaskToList(task) {
    const taskList = this.state.taskList;
    var newTask = {
      content: task.content,
      priority: task.priority
    };
    this.setState({
      taskList: taskList.concat([
        newTask
      ])
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 style={{ color: 'white' }} className='h1'>Very Simple To-Do App</h1>
        <p style={{ color: 'white' }}>Track all of the things </p><hr />
        <div className='row'>
          <div className='col-md-4'><AdditionManager addTaskToList={this.addTaskToList}></AdditionManager></div>
          <div className='col-md-8'><ViewManager taskList={this.state.taskList} /></div>
        </div>
      </div>
    );
  }
}

export default App;
