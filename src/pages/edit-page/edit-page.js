import React, { Component } from 'react';
import Api from '../../services/megapolis-service';
import Button from '../../ui/button';
import './edit-page.css';
import { withRouter, Link } from 'react-router-dom';

class EditPage extends Component {

  state = {
    id: null,
    title: '',
    fieldValue: '',
    changed: false,
  }

  componentDidMount() {
    const id = this.props.itemId;

    Api.getAllTask().then(response => {
      const taskList = response.data.data;
      const idx = taskList.findIndex((el) => el.id == id);

      this.setState({
        id: taskList[idx].id,
        title: taskList[idx].title
      });
    });
  }

  changeValue = ({ target }) => {
    this.setState({
      changed: this.state.title !== target.value,
      fieldValue: target.value
    });
  }

  editTask = () => {
    const { id, fieldValue } = this.state;
    Api.editTask({ id, title: fieldValue }).then(() => {
      this.props.history.push(`/items`)
    });
  }

  deleteTask = () => {
    Api.deleteTask(this.state.id).then(() => {
      this.props.history.push(`/items`)
    });
  }

  render() {
    const {id, title, changed} = this.state;
    const btn = changed 
          ? <div onClick={this.editTask} Link>
              <Button text="Сохранить" type="info" /> 
            </div>
            
          : <Link to='/items' >
              <Button text="Вернуться в список" type="info" />
            </Link> 

    return (
      <div className="edit-page">
        <div className="edit-page__header">
          <h1>Задача №{id}</h1>
          <div className="edit-page__del" onClick={this.deleteTask}>
            <Button text="Удалить" type="danger" />
          </div>
        </div>
        <div className="form">
          <label className="form-label">
            Краткое описание
          </label>
          <input className="form-field" defaultValue={ title }
                 onInput={this.changeValue} />
        </div>
        { btn }
      </div>
    );
  }
}

export default withRouter(EditPage);