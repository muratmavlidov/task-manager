import React, { Component } from 'react';
import ItemsPage from '../pages/items-page';
import EditPage from '../pages/edit-page';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return(
      <div className="app">
        <Router>
          <Route path="/items" exact component={ItemsPage} />
          
          <Route path="/items/:id"
                 render={({match}) => {
                   const { id } = match.params;
                   return <EditPage itemId={id} />
                 }} />
        </Router>
      </div>
    );
  }
}

export default App;