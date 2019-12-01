import React from 'react';
import './task-list-item.css';

const TaskListItem = ({ id, title, deleteTask, goToEditPage }) => {
  return (
    <li className="task-list-item">
      <div className="task-list-item__id">{ id }</div>
      <div className="task-list-item__title">{ title }</div>
      <div className="task-list-item__icons">
        <i className="fa fa-pencil" onClick={goToEditPage}></i>
        <i className="fa fa-trash" onClick={deleteTask}></i>
      </div>
    </li>
  );
}

export default TaskListItem;