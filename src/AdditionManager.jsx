import React, { Component } from 'react';

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
    this.props.addTask(newTask);
    this.setState({
      content: '',
      priority: 0
    })
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header px-2'>Add New Task</div>
        <div className='form-group px-2'>

          <label className='px-2'><strong>I want to...</strong></label>
          <textarea className='form-control' name='content' value={this.state.content} onChange={this.handleChange}></textarea>

          <label className='px-2'><strong>How much of a priority is this?</strong></label>
          <select name='priority' value={this.state.priority} onChange={this.handleChange} className='form-control' placeholder='Select a Priority'>
            <option disabled>Select a Priority</option>
            <option value='1'>High</option>
            <option value='2'>Moderate</option>
            <option value='3'>Low</option>
          </select>

          <div className='card-footer'>
            <button name='btn' type='submit' className='btn btn-success btn-block' onClick={this.handleClick}>Add</button>
          </div>

        </div>
      </div>
    );
  }
}

export default AdditionManager;
