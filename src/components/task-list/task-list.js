import React from 'react';
import './task-list.css'
import TaskListItem from '../task-list-item';

const TaskList = ({ taskList, deleteTask, goToEditPage }) => (
  <ul className="task-list">
    {
      taskList.map(({id, title}) => {
        return(
          <TaskListItem key={id} id={id} title={title}
                        deleteTask={() => deleteTask(id)}
                        goToEditPage={() => goToEditPage(id)} />
        );
      })
    }
  </ul>
);

export default TaskList;