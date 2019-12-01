import React from 'react';
import './header.css'
import Button from '../../ui/button';

const Header = ({ showAddPopup }) => {
  return(
    <div className="header">
      <div className="header__title">
        <h1>Список задач</h1>
      </div>
      <div onClick={showAddPopup}>
        <Button text="Добавить" type="success"/>
      </div>
    </div>
  );
}

export default Header;