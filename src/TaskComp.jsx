import React, { Component } from 'react';
import Octicon, { Trashcan, Pencil } from '@githubprimer/octicons-react';

class TaskItem extends Component {
  constructor(props) {
    console.log('props', props);
    super(props);
    this.state = {
      content: this.props.content,
      priority: this.props.priority,
      index: this.props.index,
      editMode: this.props.editMode,
      completed: this.props.completed
    }
    this.getColor = this.getColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleSaveBtn = this.handleSaveBtn.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name, 'changed')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEditBtn(e) {
    let index = this.state.index;
    this.props.toggleEdit(index);
  }

  handleSaveBtn(e) {
    let newTask = {
      content: this.state.content,
      priority: this.state.priority,
      editMode: !this.state.editMode
    }
    const index = this.state.index;
    this.props.editTask(index, newTask);
    this.props.toggleEdit(index);
  }

  handleCheckbox(e) {
    let index = this.state.index;
    this.props.toggleComplete(index);
  }

  getColor() {
    switch (this.state.priority) {
      case '1':
        return 'list-group-item list-group-item-danger mb-0 pb-0 d-flex';
      case '2':
        return 'list-group-item list-group-item-warning mb-0 pb-0 d-flex';
      case '3':
        return 'list-group-item list-group-item-success mb-0 pb-0 d-flex'
    }
  }

  getColorEditMode() {
    switch (this.state.priority) {
      case '1':
        return 'form-group px-2 alert-danger mb-0 pb-1';
      case '2':
        return 'form-group px-2 alert-warning mb-0 pb-1';
      case '3':
        return 'form-group px-2 alert-success mb-0 pb-1'
    }
  }

  render() {

    if (this.props.editMode) {
      return (
        <div className={this.getColorEditMode()} style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }} >
          <label className='p-2'><strong>Description</strong></label>
          <textarea className='form-control m-2' name='content' value={this.state.content} onChange={this.handleChange}></textarea>
          <label className='p-2'><strong>Priority</strong></label>
          <select name='priority' value={this.state.priority} onChange={this.handleChange} className='form-control' placeholder='Select a priority'>
            <option value='0'>Select a Priority</option>
            <option value='1'>High</option>
            <option value='2'>Moderate</option>
            <option value='3'>Low</option>h
          </select>
          <button name='btn' type='submit' className='btn btn-success d-flex ml-auto m-2' onClick={this.handleSaveBtn}>Save</button>
        </div >
      )
    }

    return (
      <li className={this.getColor()} style={{
        textDecoration: this.props.completed ? 'line-through' : 'none'
      }} >
        <input type='checkbox' onChange={this.handleCheckbox} />
        {this.props.content}
        <a className='btn ml-auto' onClick={this.handleEditBtn} >
          <Octicon icon={Pencil} />
        </a>
        <a className='btn' onClick={this.props.delete}>
          <Octicon icon={Trashcan} />
        </a>
      </li>
    );
  }
}

export default TaskItem;
