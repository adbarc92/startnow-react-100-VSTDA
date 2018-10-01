import React from 'react';
import Octicon, { Trashcan, Pencil } from '@githubprimer/octicons-react';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      priority: this.props.priority,
      isBeingEdited: this.props.isBeingEdited,
      key: this.props.key
    }
  }

  setColor(priority) {
    var color = priority === '1' ? 'alert alert-danger d-flex' : (priority === '2' ? 'alert alert-warning d-flex' : 'alert alert-success d-flex');
    return color;
  }

  handleEdit(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  if(isBeingEdited) {
    render(){
      return (
        <div className='form-group px-2'>
          <label className='px-2'><strong>Description</strong></label>
          <textarea className='form-control' name='content' value={this.state.content} onChange={this.handleEdit}></textarea>
          <label className='px-2'><strong>Description</strong></label>
        </div>
      )
    }
  }
  render() {
    return (
      <div className={setColor(props.priority)} >
        <input type='checkbox' className='' onChange={this.props.handleComplete} />{props.content}<a className='btn ml-auto' >
          <Octicon icon={Pencil} />
        </a>
        <a className='btn'>
          <Octicon icon={Trashcan} />
        </a>
      </div >
    )
  }
}
