import React, { Component } from 'react';
import '../styles/App.css';
import ItemsContainer from './Items/ItemsContainer';
import DetailsContainer from './Details/DetailsContainer';

class App extends Component {
  state = {
    bgColor: '',
    tabSelected: null,
  };

  changeSelectedTabs = (color, isSelected) => {
    this.setState({ bgColor: color, tabSelected: isSelected });
  };

  render() {
    const { bgColor, tabSelected } = this.state;
    return (
      <div className="App">
        <ItemsContainer
          bgColor={bgColor}
          tabSelected={tabSelected}
          changeSelectedTabs={this.changeSelectedTabs}
        />
        <DetailsContainer
          bgColor={bgColor}
          tabSelected={tabSelected}
          changeSelectedTabs={this.changeSelectedTabs}
        />
      </div>
    );
  }
}

export default App;
