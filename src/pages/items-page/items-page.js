import React, { Component } from 'react';
import Header from '../../components/header';
import TaskList from '../../components/task-list';
import AddPopup from '../../components/add-popup';
import Api from '../../services/megapolis-service';
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/spinner';

import './items-page.css';

class itemsPage extends Component {

  state = {
    showAddPopup: false,
    taskList: [],
    showSpinner: true
  }

  componentDidMount() {
    Api.getAllTask().then(response => {
      this.setState({
        taskList: response.data.data,
        showSpinner: false
      });
    });
  }

  toggleAddPopup = () => {
    this.setState(({showAddPopup}) => {
      return { showAddPopup: !showAddPopup }
    });
  }

  createTask = (value) => {
    Api.createTask(value).then(response => {
      const { id } = response.data;
      const newTaskItem = { id, title: value };
      const newTaskList = [...this.state.taskList, newTaskItem ];

      this.setState({
        taskList: newTaskList
      });
    });
  }

  deleteTask = (id) => {
    Api.deleteTask(id).then(() => {
      this.setState(({taskList}) => {
        const idx = taskList.findIndex((el) => el.id === id);
        const newTaskList = [
          ...taskList.slice(0, idx),
          ...taskList.slice(idx + 1),
        ];

        return {
          taskList: newTaskList
        }
      })
    });
  }

  render() {
    const { showAddPopup, taskList, showSpinner } = this.state;
    const { history } = this.props;
    const listContent = showSpinner
          ? <div className="items-page__spinner"><Spinner /></div>
          : <TaskList taskList={taskList}
              deleteTask={this.deleteTask}
              goToEditPage={(id) => {
                history.push(`/items/${id}`)
            }} />

    return(
      <div>
        <Header showAddPopup={this.toggleAddPopup} />
        { listContent }
        <AddPopup show={showAddPopup}
                  closePopup={this.toggleAddPopup}
                  createTask={this.createTask} />
    </div>
    )
  }
}

export default withRouter(itemsPage);