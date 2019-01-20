import React, { Component } from 'react';
import '../styles/App.css';
import ItemsContainer from './Items/ItemsContainer';
import DetailsContainer from './Details/DetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsContainer />
        <DetailsContainer />
      </div>
    );
  }
}

export default App;
