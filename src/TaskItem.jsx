import React from 'react';
import Octicon, { Trashcan, Pencil } from '@githubprimer/octicons-react';

// function ItemBeingEdited(props) {
//   return (
//     <div className='form-group px-2'>
//       <label className='px-2'><strong>Description</strong></label>
//       <textarea className='form-control' name='content' value={this.state.content}></textarea>
//       <label className='px-2'><strong>Priority</strong></label>
//       <textarea className='form-control' name='content' value={this.state.content}></textarea>
//       <select name='priority' value onChange>
//         <option value={this.state.priority} disabled>Select a Priority</option>
//         <option value='1'>High</option>
//         <option value='2'>Moderate</option>
//         <option value='3'>Low</option>
//       </select>
//       <div className='card-footer'>
//         <button name='btn' type='submit' className='btn btn-success btn-block' onClick={this.handleClick}>Add</button>
//       </div>
//     </div>
//   )
// }

function TaskItem(props) {
  var color = props.priority === '1' ? 'alert alert-danger d-flex  flex-row mb-0 pb-0' : (props.priority === '2' ? 'alert alert-warning d-flex flex-row mb-0 pb-0' : 'alert alert-success d-flex flex-row mb-0 pb-0');
  // if (props.isBeingEdited === true) {
  //   return (

  //   )
  // }
  return (
    <div className={color} >
      <input type='checkbox' />
      {props.content}
      <a className='btn ml-auto' >
        <Octicon icon={Pencil} />
      </a>
      <a className='btn' onClick={props.delete}>
        <Octicon icon={Trashcan} />
      </a>
    </div>
  );
}

export default TaskItem;
