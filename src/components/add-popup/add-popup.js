import React, { Component } from 'react';
import './add-popup.css';
import Button from '../../ui/button';

class AddPopup extends Component {

  state = {
    fieldValue: '',
    errorMessage: false
  }

  changeField = ({ target }) => {
    this.setState({
      fieldValue: target.value,
      errorMessage: false
    })
  }

  createNewTask = () => {
    if (this.state.fieldValue === '') {
      this.setState({ errorMessage: true });
      return;
    }
    this.props.closePopup();
    this.props.createTask(this.state.fieldValue);
  }

  render() {
    const { show, closePopup } = this.props;
    const { errorMessage } = this.state;
    const overlayActive = show ? 'overlay--active' : '';
    const errorActive = errorMessage ? 'add-popup__formError--active' : '';
    
    return(
      <div className={`overlay ${overlayActive}`}>
        <div className="add-popup">
          <div className="form">
              <label className="form-label">
                Краткое описание
              </label> 
              <input className="form-field"
                     onInput={this.changeField} />
              <span className={`add-popup__formError ${errorActive}`}>
                Заголовок не может быть пустым 
              </span>
          </div>
          <div className="add-popup__btn" onClick={this.createNewTask}>
            <Button text="Создать" type="success" />
          </div>
          <div className="add-popup__close" onClick={closePopup}>
            &times;
          </div>
        </div>
      </div>
    );
  }
}

export default AddPopup;