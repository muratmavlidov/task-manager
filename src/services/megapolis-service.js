import axios from 'axios';

const _baseUrl = 'https://test.megapolis-it.ru/api/list';

export default class Api {
  //
  //  get task list
  //
  static getAllTask() {
    return axios.get(_baseUrl);
  }

  //
  //  create a new task
  //
  static createTask(data) {
    return axios.post(_baseUrl, { title: data });
  }

  //
  //  editing task by id
  //
  static editTask({ id, title }) {
    return axios.post(`${_baseUrl}/${id}`, { title: title });
  }

  //
  //  remove task by id
  //
  static deleteTask(id) {
    return axios.delete(`${_baseUrl}/${id}`);
  }
  
}