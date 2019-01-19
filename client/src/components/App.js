import React, { Component } from 'react';
import '../styles/App.css';
import ItemsContainer from './Items/ItemsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsContainer />
      </div>
    );
  }
}

export default App;
